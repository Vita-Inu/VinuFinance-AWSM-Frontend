import {useWindowResize} from '@/hooks';
import {Loader} from '@/components/loader';
import {ListContainer, useListFilter} from '@/features/listContainer';
import {useNotifications, NOTIFICATION_TYPE} from '@/features/notifications';

import {DesktopTable, MobileTable} from './components';
import {useAccount, useBalance, useContractWrite, useNetwork, usePublicClient, useWaitForTransaction} from "wagmi";
import {useEffect, useState} from "react";
import {formatUnits, parseAbiItem} from "viem";
import {getPools} from "@/utils/getPools";
import {getErc20sFromPools} from "@/utils/getErc20sFromPools";
import {Loan} from "@/features/loans/types";
import {ValueWithExplain} from "@/components/table";
import {randomInt} from "crypto";
import {multicall} from "@wagmi/core";
import {IErc20Abi, IPoolAbi} from "@/const";
import humanizeDuration from "humanize-duration"
import { getTokensPrices } from '@/utils/backendInfo';

export function Loans() {
    const {sendNotification} = useNotifications()

    const {address} = useAccount()
    let client = usePublicClient()
    const {chain} = useNetwork()
    let {data} = useBalance({address: address})

    const [isFetchingLoans, setIsFetchingLoans] = useState(true);
    const [openLoans, setOpenLoans] = useState<Loan[]>([])
    const [pastLoans, setPastLoans] = useState<Loan[]>([])
    const [priceMap, setPriceMap] = useState<any>();
    const [allowances, setAllowances] = useState<Record<string, bigint>>({})

    useEffect(() => {
        setIsFetchingLoans(true)
        // fetch loans by address
        loadInfo()
            .catch((err) => {
                console.log('Failed to fetch loans:', err);
            })
            .finally(() => {
                setIsFetchingLoans(false);
            });
    }, [address]);

    async function loadInfo() {
        if (!chain) return
        let pools = await getPools(client, chain.id)
        let tokens = await getErc20sFromPools(client, chain.id, pools, address!)
        let tokenList = Array.from(tokens.keys()) as `0x${string}`[]
        let localPriceMap = await getTokensPrices(tokenList)
        setPriceMap(localPriceMap)

        let borrowLogs = await client.getLogs({
            event: parseAbiItem('event Borrow(address indexed borrower,uint256 loanIdx,uint256 collateral,uint256 loanAmount,uint256 repaymentAmount,uint256 totalLpShares,uint256 indexed expiry,uint256 indexed referralCode)'),
            fromBlock: 'earliest',
            args: {
                borrower: address
            },
            address: pools.map(x => x.address)
        })
        let repaymentLogs = await client.getLogs({
            event: parseAbiItem('event Repay(address indexed borrower,uint256 loanIdx,uint256 repaymentAmountAfterFees)'),
            fromBlock: 'earliest',
            args: {
                borrower: address
            },
            address: pools.map(x => x.address)
        })

        let rn = Date.now() / 1000

        // we got all loans info, now we just select active ones
        let repaidIds = repaymentLogs.map(x => x.args.loanIdx!)

        let activeLoans = borrowLogs.filter(x => x.args.expiry! > rn).filter(x => !repaidIds.includes(x.args.loanIdx!))
        let activeIds = activeLoans.map(x => x.args.loanIdx)
        // past loans are the ones that are not active :yum:
        let pastLoans = borrowLogs.filter(x => !activeIds.includes(x.args.loanIdx))

        let finalActiveLoans = activeLoans.map(x => {
            let pool = pools.find(pool => pool.address == x.address)!
            let loanToken = tokens.get(pool.info[0])!
            let collToken = tokens.get(pool.info[1])!
            let dueDate = new Date(Number(x.args.expiry) * 1000);
            let remainingTime = dueDate.getTime() - Date.now()

            const repaymentPrice = pool.info[0] in localPriceMap ? localPriceMap[pool.info[0]] as number : 0;
            const collateralPrice = pool.info[1] in localPriceMap ? localPriceMap[pool.info[1]] as number : 0;

            return {
                key: x.args.loanIdx!.toString(),
                id: x.args.loanIdx!,
                collateralTokenAddress: pool.info[1],
                loanTokenAddress: pool.info[0],
                collateralTokenName: collToken.symbol,
                loanTokenName: loanToken.symbol,
                pool: pool.address,
                borrowed: {
                    value: `${parseFloat(parseFloat(formatUnits(x.args.loanAmount!, loanToken.decimals)).toFixed(3)).toLocaleString('en-US')} ${loanToken.symbol}`,
                    explain: `$${parseFloat((parseFloat(formatUnits(x.args.loanAmount!, loanToken.decimals)) * repaymentPrice).toFixed(2)).toLocaleString('en-US')}`
                },
                repayBefore: {
                    value: `${dueDate.getHours()}:${dueDate.getMinutes()} ${dueDate.toDateString()}`,
                    explain: remainingTime > 0 ? humanizeDuration(remainingTime, { largest: 2 }) : ''
                },
                repaymentAmount: {
                    value: `${parseFloat(parseFloat(formatUnits(x.args.repaymentAmount!, loanToken.decimals)).toFixed(3)).toLocaleString('en-US')} ${loanToken.symbol}`,
                    explain: `$${parseFloat((repaymentPrice * parseFloat(formatUnits(x.args.repaymentAmount!, loanToken.decimals))).toFixed(2)).toLocaleString('en-US')}`
                },
                collateralAmount: {
                    value: `${parseFloat(parseFloat(formatUnits(x.args.collateral!, collToken.decimals)).toFixed(3)).toLocaleString('en-US')} ${collToken.symbol}`,
                    explain: `$${parseFloat((collateralPrice * parseFloat(formatUnits(x.args.collateral!, collToken.decimals))).toFixed(2)).toLocaleString('en-US')}`
                },
                uniqueId: `${x.args.loanIdx}${pool.address}`,
                repaymentAmountRaw: x.args.repaymentAmount,
                wasPaidOff: false
            }
        }).reverse()

        // calculate allowances to pools
        let toFetchAllowancesFor = finalActiveLoans.map(x => {
            return {
                loanToken: x.loanTokenAddress,
                pool: x.pool,
                unique: x.pool + x.loanTokenAddress
            }
        }).filter(
            (thing, i, arr) => arr.findIndex(x => x.unique === thing.unique) === i
        )
        let lallowances = await multicall({
            contracts: toFetchAllowancesFor.map(x => {
                return {
                    address: x.loanToken,
                    abi: IErc20Abi,
                    functionName: 'allowance',
                    args: [address, x.pool]
                }
            })
        })
        setAllowances(
            lallowances.reduce((acc, item, index) => (acc[toFetchAllowancesFor[index].pool] = item.result as bigint, acc), {} as Record<string, bigint>)
        )

        let finalPastLoans = pastLoans.map(x => {
            let pool = pools.find(pool => pool.address == x.address)!
            let loanToken = tokens.get(pool.info[0])!
            let collToken = tokens.get(pool.info[1])!

            const repaymentPrice = pool.info[0] in localPriceMap ? localPriceMap[pool.info[0]] as number : 0;
            const collateralPrice = pool.info[1] in localPriceMap ? localPriceMap[pool.info[1]] as number : 0;

            return {
                key: x.args.loanIdx!.toString(),
                id: x.args.loanIdx!,
                collateralTokenAddress: pool.info[1],
                loanTokenAddress: pool.info[0],
                collateralTokenName: collToken.symbol,
                loanTokenName: loanToken.symbol,
                pool: pool.address,
                borrowed: {
                    value: `${parseFloat(parseFloat(formatUnits(x.args.loanAmount!, loanToken.decimals)).toFixed(3)).toLocaleString('en-US')} ${loanToken.symbol}`,
                    explain: `$${parseFloat((parseFloat(formatUnits(x.args.loanAmount!, loanToken.decimals)) * repaymentPrice).toFixed(2)).toLocaleString('en-US')}`
                },
                repayBefore: {
                    value: 'tomorrow',
                    explain: 'tomorrow2'
                },
                repaymentAmount: {
                    value: `${parseFloat(parseFloat(formatUnits(x.args.repaymentAmount!, loanToken.decimals)).toFixed(3)).toLocaleString('en-US')} ${loanToken.symbol}`,
                    explain: `$${parseFloat((repaymentPrice * parseFloat(formatUnits(x.args.repaymentAmount!, loanToken.decimals))).toFixed(2)).toLocaleString('en-US')}`
                },
                collateralAmount: {
                    value: `${parseFloat(parseFloat(formatUnits(x.args.collateral!, collToken.decimals)).toFixed(3)).toLocaleString('en-US')} ${collToken.symbol}`,
                    explain: `$${parseFloat((collateralPrice * parseFloat(formatUnits(x.args.collateral!, collToken.decimals))).toFixed(2)).toLocaleString('en-US')}`
                },
                uniqueId: `${x.args.loanIdx}${pool.address}`,
                wasPaidOff: repaidIds.includes(x.args.loanIdx!)
            }
        }).reverse()
        setOpenLoans(finalActiveLoans)
        setPastLoans(finalPastLoans)
    }

    const {onFilter, filters, currentFilter} = useListFilter([
        {label: 'Open loans', value: 'OPEN_LOANS'},
        {label: 'Past loans', value: 'PAST_LOANS'},
    ]);

    const loans = currentFilter === "OPEN_LOANS" ? openLoans : pastLoans;

    //region WAIT_FOR_TRANSACTION
    let [currentApproveTx, setCurrentApproveTx] = useState<`0x${string}`>()
    let [currentRepayTx, setCurrentRepayTx] = useState<`0x${string}`>()
    const {data: approveData, isLoading: isLoadingApprovalTx} = useWaitForTransaction({
        hash: currentApproveTx,
        onSuccess: data => {
            loadInfo()
            if (needsContinuation) {
                writeRepay({
                    args: [
                        continuation!.id,
                        address
                    ],
                    // @ts-ignore
                    address: continuation!.pool
                })
                setNeedsContinuation(false)
                setContinuation(undefined)
            }
        },

    })
    const {data: repaymentData, isLoading: isLoadingRepaymentTx} = useWaitForTransaction({
        hash: currentRepayTx,
        onSettled: data => {
            loadInfo()
        }
    })
    //endregion

    //region CONTRACT WRITES
    const {
        data: dataApprove,
        isLoading: isLoadingApprove,
        isSuccess: isSuccessApprove,
        write: writeApprove
    } = useContractWrite({
        abi: IErc20Abi,
        functionName: 'approve',
        onSuccess: sentTxResult => {
            setCurrentApproveTx(sentTxResult.hash)
            sendNotification(NOTIFICATION_TYPE.SUCCESS, 'Approval transaction sent successfully')
        }
    })


    const {
        data: dataRepay,
        isLoading: isLoadingRepay,
        isSuccess: isSuccessRepay,
        write: writeRepay
    } = useContractWrite({
        abi: IPoolAbi,
        functionName: 'repay',
        onSuccess: sentTxResult => {
            setCurrentRepayTx(sentTxResult.hash)
            sendNotification(NOTIFICATION_TYPE.SUCCESS, 'Repay transaction sent successfully')
        }
    })
    //endregion

    const isLoading = isLoadingApprovalTx || isLoadingRepay || isLoadingApprove || isLoadingRepaymentTx

    const [needsContinuation, setNeedsContinuation] = useState<boolean>(false)
    const [continuation, setContinuation] = useState<{ id: bigint, pool: `0x${string}` }>()

    const {isTabletSize} = useWindowResize();

    async function repay(id: bigint, pool: `0x${string}`) {
        let loan = loans.find(x => x.id == id && x.pool == pool)!;
        let allowance = allowances[pool];
        if (allowance < loan.repaymentAmountRaw!) {
            writeApprove({
                args: [
                    pool,
                    loan.repaymentAmountRaw
                ],
                // @ts-ignore
                address: loan.loanTokenAddress,
            })
            setNeedsContinuation(true)
            setContinuation({
                id,
                pool
            })
            return
        }
        writeRepay({
            args: [
                id,
                address
            ],
            // @ts-ignore
            address: pool
        })
    }

    if(isFetchingLoans){
        return <Loader/>
    }

    return (
        <ListContainer filters={filters} onFilter={onFilter}>
            <>
                {!isTabletSize && <DesktopTable currentFilter={currentFilter} isLoading={isLoading} data={loans} repay={repay}/>}
                {isTabletSize && <MobileTable currentFilter={currentFilter} isLoading={isLoading} repay={repay} data={loans}/>}
            </>
        </ListContainer>
    );
}
