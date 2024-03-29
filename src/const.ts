import {Chain} from '@wagmi/core'
import Dict = NodeJS.Dict;
import {Abi} from "viem";

export const vinuChain = {
    id: 207,
    name: 'Vita Inu',
    network: 'Vita Inu',
    nativeCurrency: {
        decimals: 18,
        name: 'VinuChain',
        symbol: 'VC',
    },
    rpcUrls: {
        public: {http: ['https://vinuchain-rpc.com']},
        default: {http: ['https://vinuchain-rpc.com']},
    },
    blockExplorers: {
        etherscan: {name: 'VinuScan', url: 'https://vinuscan.com'},
        default: {name: 'VinuScan', url: 'https://vinuscan.com'},
    },
    contracts: {
        multicall3: {
            address: '0x63CE2062281fb85fE5BC407799A455C21f35F355'
        },
    },
} as const satisfies Chain

export type ChainInfo = {
    CONTROLLER: `0x${string}`,
    MULTICLAIM: `0x${string}`,
    EMERGENCY_WITHDRAWAL: `0x${string}`,
    WETH: `0x{string}`,
    ALLOWED_POOL_HASHES: readonly string[]
}

export const CHAIN_INFO: { [id: number]: ChainInfo } = {
    207: {
        CONTROLLER: '0x17bA239f2815BA01152522521737275a2439216f' as `0x{string}`,
        MULTICLAIM: '0xA260d19aEe266cC85F41f160271F9C72ea8E2837' as `0x{string}`,
        WETH: '0xEd8c5530a0A086a12f57275728128a60DFf04230' as `0x{string}`,
        EMERGENCY_WITHDRAWAL: '0xeBC1C9Ae7FC761330929d682d97334513C1FcB4b' as `0x{string}`,
        ALLOWED_POOL_HASHES: ["d9e68d14c5fba51abecc0eebfed5bf364a6061b2bff391e89211d87bbfde9cbb"]
    },
}

export const IWethAbi: Abi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "src",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "guy",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "wad",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "dst",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "wad",
                "type": "uint256"
            }
        ],
        "name": "Deposit",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "src",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "dst",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "wad",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "src",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "wad",
                "type": "uint256"
            }
        ],
        "name": "Withdrawal",
        "type": "event"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "guy",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "wad",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "deposit",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "dst",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "wad",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "src",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "dst",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "wad",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "wad",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

export const IMulticall3Abi: Abi = [
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "target",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes",
                        "name": "callData",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct Multicall3.Call[]",
                "name": "calls",
                "type": "tuple[]"
            }
        ],
        "name": "aggregate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "blockNumber",
                "type": "uint256"
            },
            {
                "internalType": "bytes[]",
                "name": "returnData",
                "type": "bytes[]"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "target",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "allowFailure",
                        "type": "bool"
                    },
                    {
                        "internalType": "bytes",
                        "name": "callData",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct Multicall3.Call3[]",
                "name": "calls",
                "type": "tuple[]"
            }
        ],
        "name": "aggregate3",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "bool",
                        "name": "success",
                        "type": "bool"
                    },
                    {
                        "internalType": "bytes",
                        "name": "returnData",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct Multicall3.Result[]",
                "name": "returnData",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "target",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "allowFailure",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "callData",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct Multicall3.Call3Value[]",
                "name": "calls",
                "type": "tuple[]"
            }
        ],
        "name": "aggregate3Value",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "bool",
                        "name": "success",
                        "type": "bool"
                    },
                    {
                        "internalType": "bytes",
                        "name": "returnData",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct Multicall3.Result[]",
                "name": "returnData",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "target",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes",
                        "name": "callData",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct Multicall3.Call[]",
                "name": "calls",
                "type": "tuple[]"
            }
        ],
        "name": "blockAndAggregate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "blockNumber",
                "type": "uint256"
            },
            {
                "internalType": "bytes32",
                "name": "blockHash",
                "type": "bytes32"
            },
            {
                "components": [
                    {
                        "internalType": "bool",
                        "name": "success",
                        "type": "bool"
                    },
                    {
                        "internalType": "bytes",
                        "name": "returnData",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct Multicall3.Result[]",
                "name": "returnData",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBasefee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "basefee",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "blockNumber",
                "type": "uint256"
            }
        ],
        "name": "getBlockHash",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "blockHash",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBlockNumber",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "blockNumber",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getChainId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "chainid",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCurrentBlockCoinbase",
        "outputs": [
            {
                "internalType": "address",
                "name": "coinbase",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCurrentBlockDifficulty",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "difficulty",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCurrentBlockGasLimit",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "gaslimit",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCurrentBlockTimestamp",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }
        ],
        "name": "getEthBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getLastBlockHash",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "blockHash",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "requireSuccess",
                "type": "bool"
            },
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "target",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes",
                        "name": "callData",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct Multicall3.Call[]",
                "name": "calls",
                "type": "tuple[]"
            }
        ],
        "name": "tryAggregate",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "bool",
                        "name": "success",
                        "type": "bool"
                    },
                    {
                        "internalType": "bytes",
                        "name": "returnData",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct Multicall3.Result[]",
                "name": "returnData",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "requireSuccess",
                "type": "bool"
            },
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "target",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes",
                        "name": "callData",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct Multicall3.Call[]",
                "name": "calls",
                "type": "tuple[]"
            }
        ],
        "name": "tryBlockAndAggregate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "blockNumber",
                "type": "uint256"
            },
            {
                "internalType": "bytes32",
                "name": "blockHash",
                "type": "bytes32"
            },
            {
                "components": [
                    {
                        "internalType": "bool",
                        "name": "success",
                        "type": "bool"
                    },
                    {
                        "internalType": "bytes",
                        "name": "returnData",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct Multicall3.Result[]",
                "name": "returnData",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    }
]

export const IPoolAbi: Abi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "lp",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newLpShares",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalLiquidity",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalLpShares",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "earliestRemove",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "loanIdx",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "referralCode",
                "type": "uint256"
            }
        ],
        "name": "AddLiquidity",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "ownerOrBeneficiary",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_packedApprovals",
                "type": "uint256"
            }
        ],
        "name": "ApprovalUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "borrower",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "loanIdx",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "collateral",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "loanAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "repaymentAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalLpShares",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "expiry",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "referralCode",
                "type": "uint256"
            }
        ],
        "name": "Borrow",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "lp",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "loanIdxs",
                "type": "uint256[]"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "repayments",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "collateral",
                "type": "uint256"
            }
        ],
        "name": "Claim",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "contract IERC20",
                "name": "loanCcyToken",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "contract IERC20",
                "name": "collCcyToken",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "loanTenor",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "maxLoanPerColl",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "r1",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "r2",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "liquidityBnd1",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "liquidityBnd2",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "minLoan",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "creatorFee",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "poolController",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint96",
                "name": "rewardCoefficient",
                "type": "uint96"
            }
        ],
        "name": "NewSubPool",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "lp",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "repayments",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newLpShares",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "earliestRemove",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "loanIdx",
                "type": "uint256"
            }
        ],
        "name": "Reinvest",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "lp",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "removedLpShares",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalLiquidity",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalLpShares",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "loanIdx",
                "type": "uint256"
            }
        ],
        "name": "RemoveLiquidity",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "borrower",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "loanIdx",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "repaymentAmountAfterFees",
                "type": "uint256"
            }
        ],
        "name": "Repay",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_onBehalfOf",
                "type": "address"
            },
            {
                "internalType": "uint128",
                "name": "_sendAmount",
                "type": "uint128"
            },
            {
                "internalType": "uint256",
                "name": "_deadline",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_referralCode",
                "type": "uint256"
            }
        ],
        "name": "addLiquidity",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_onBehalf",
                "type": "address"
            },
            {
                "internalType": "uint128",
                "name": "_sendAmount",
                "type": "uint128"
            },
            {
                "internalType": "uint128",
                "name": "_minLoan",
                "type": "uint128"
            },
            {
                "internalType": "uint128",
                "name": "_maxRepay",
                "type": "uint128"
            },
            {
                "internalType": "uint256",
                "name": "_deadline",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_referralCode",
                "type": "uint256"
            }
        ],
        "name": "borrow",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_onBehalfOf",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "_loanIdxs",
                "type": "uint256[]"
            },
            {
                "internalType": "bool",
                "name": "_isReinvested",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "_deadline",
                "type": "uint256"
            }
        ],
        "name": "claim",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_lpAddr",
                "type": "address"
            }
        ],
        "name": "getLpInfo",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "fromLoanIdx",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "earliestRemove",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "currSharePtr",
                "type": "uint32"
            },
            {
                "internalType": "uint256[]",
                "name": "sharesOverTime",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "loanIdxsWhereSharesChanged",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPoolInfo",
        "outputs": [
            {
                "internalType": "contract IERC20",
                "name": "_loanCcyToken",
                "type": "address"
            },
            {
                "internalType": "contract IERC20",
                "name": "_collCcyToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_maxLoanPerColl",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_minLoan",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_loanTenor",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_totalLiquidity",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_totalLpShares",
                "type": "uint256"
            },
            {
                "internalType": "uint96",
                "name": "_rewardCoefficient",
                "type": "uint96"
            },
            {
                "internalType": "uint256",
                "name": "_loanIdx",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getRateParams",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "_liquidityBnd1",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_liquidityBnd2",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_r1",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_r2",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_ownerOrBeneficiary",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_sender",
                "type": "address"
            },
            {
                "internalType": "enum IBasePool.ApprovalTypes",
                "name": "_approvalType",
                "type": "uint8"
            }
        ],
        "name": "isApproved",
        "outputs": [
            {
                "internalType": "bool",
                "name": "_approved",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "loanIdx",
                "type": "uint256"
            }
        ],
        "name": "loanIdxToBorrower",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint128",
                "name": "_inAmountAfterFees",
                "type": "uint128"
            }
        ],
        "name": "loanTerms",
        "outputs": [
            {
                "internalType": "uint128",
                "name": "loanAmount",
                "type": "uint128"
            },
            {
                "internalType": "uint128",
                "name": "repaymentAmount",
                "type": "uint128"
            },
            {
                "internalType": "uint128",
                "name": "pledgeAmount",
                "type": "uint128"
            },
            {
                "internalType": "uint256",
                "name": "_creatorFee",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_totalLiquidity",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_onBehalfOf",
                "type": "address"
            },
            {
                "internalType": "uint128",
                "name": "numSharesRemove",
                "type": "uint128"
            }
        ],
        "name": "removeLiquidity",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_loanIdx",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_recipient",
                "type": "address"
            }
        ],
        "name": "repay",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_approvee",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_packedApprovals",
                "type": "uint256"
            }
        ],
        "name": "setApprovals",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

export const IErc20Abi: Abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

export const IControllerAbi: Abi = [
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "_voteToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_pauseThreshold",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_unpauseThreshold",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_whitelistThreshold",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_dewhitelistThreshold",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_snapshotEvery",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_lockPeriod",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_vetoHolder",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "proposalIdx",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "voter",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "votes",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newTotalVotes",
                "type": "uint256"
            }
        ],
        "name": "Cancelled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newBalance",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newTotalSupply",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "subTimestamp",
                "type": "uint256"
            }
        ],
        "name": "DepositedVoteToken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "proposalIdx",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalVotes",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "voteTokenTotalSupply",
                "type": "uint256"
            }
        ],
        "name": "Executed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "proposalIdx",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "creator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "contract IPausable",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "enum IController.Action",
                "name": "action",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }
        ],
        "name": "ProposalCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint128",
                "name": "liquidity",
                "type": "uint128"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "duration",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint96",
                "name": "rewardCoefficient",
                "type": "uint96"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Reward",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract IERC20",
                "name": "tokenId",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenSnapshotIdx",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "accountSnapshotIdx",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalClaimedRevenue",
                "type": "uint256"
            }
        ],
        "name": "TokenClaimed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract IERC20",
                "name": "tokenId",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenSnapshotIdx",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "voteTokenTotalSupply",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "collectedRevenue",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "subTimestamp",
                "type": "uint256"
            }
        ],
        "name": "TokenSnapshotPerformed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "proposalIdx",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "VetoHolderApproval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "oldHolder",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "newHolder",
                "type": "address"
            }
        ],
        "name": "VetoPowerTransfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "proposalIdx",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "voter",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "votes",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newTotalVotes",
                "type": "uint256"
            }
        ],
        "name": "Voted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newBalance",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newTotalSupply",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "subTimestamp",
                "type": "uint256"
            }
        ],
        "name": "WithdrawnVoteToken",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC20[]",
                "name": "_tokens",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "_tokenSnapshotIdxs",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "_accountSnapshotIdxs",
                "type": "uint256[]"
            }
        ],
        "name": "claimMultiple",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_tokenSnapshotIdx",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_accountSnapshotIdx",
                "type": "uint256"
            }
        ],
        "name": "claimToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_deposit",
                "type": "bool"
            }
        ],
        "name": "collectReward",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IPausable",
                "name": "_target",
                "type": "address"
            },
            {
                "internalType": "enum IController.Action",
                "name": "_action",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "_deadline",
                "type": "uint256"
            }
        ],
        "name": "createProposal",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "",
                "type": "address"
            }
        ],
        "name": "currentRevenue",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "depositRevenue",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "depositRewardSupply",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "depositVoteToken",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "dewhitelistThreshold",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "_token",
                "type": "address"
            }
        ],
        "name": "forceTokenSnapshotCheck",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_accountSnapshotIdx",
                "type": "uint256"
            }
        ],
        "name": "getAccountSnapshot",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "_voteTokenBalance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_timestamp",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_subTimestamp",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_proposalIdx",
                "type": "uint256"
            }
        ],
        "name": "getProposal",
        "outputs": [
            {
                "internalType": "contract IPausable",
                "name": "_target",
                "type": "address"
            },
            {
                "internalType": "enum IController.Action",
                "name": "_action",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "_totalVotes",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_vetoApprover",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "_executed",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "_deadline",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_proposalIdx",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_voter",
                "type": "address"
            }
        ],
        "name": "getProposalVotes",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_tokenSnapshotIdx",
                "type": "uint256"
            }
        ],
        "name": "getTokenSnapshot",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "_voteTokenTotalSupply",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_collectedRevenue",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_claimedRevenue",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_timestamp",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_subTimestamp",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_tokenSnapshotIdx",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_account",
                "type": "address"
            }
        ],
        "name": "hasClaimedSnapshot",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "lastDepositTimestamp",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lockPeriod",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "numAccountSnapshots",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "numProposals",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "",
                "type": "address"
            }
        ],
        "name": "numTokenSnapshots",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "numVotings",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pauseThreshold",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "poolWhitelisted",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_proposalIdx",
                "type": "uint256"
            }
        ],
        "name": "removeVote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_account",
                "type": "address"
            },
            {
                "internalType": "uint128",
                "name": "_liquidity",
                "type": "uint128"
            },
            {
                "internalType": "uint32",
                "name": "_duration",
                "type": "uint32"
            },
            {
                "internalType": "uint96",
                "name": "_rewardCoefficient",
                "type": "uint96"
            }
        ],
        "name": "requestTokenDistribution",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "rewardBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rewardSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_proposalIdx",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_approve",
                "type": "bool"
            }
        ],
        "name": "setVetoHolderApproval",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "snapshotTokenEvery",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "subTimestampCounter",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_newHolder",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "transferToZero",
                "type": "bool"
            }
        ],
        "name": "transferVetoPower",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "unpauseThreshold",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "vetoHolder",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_proposalIdx",
                "type": "uint256"
            }
        ],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "voteToken",
        "outputs": [
            {
                "internalType": "contract IERC20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "voteTokenBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "voteTokenTotalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "whitelistThreshold",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "withdrawVoteToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

export const IMultiClaimAbi: Abi = [
    {
        "inputs": [
            {
                "internalType": "contract IBasePool",
                "name": "pool",
                "type": "address"
            },
            {
                "internalType": "uint256[][]",
                "name": "_loanIdxs",
                "type": "uint256[][]"
            },
            {
                "internalType": "bool[]",
                "name": "_isReinvested",
                "type": "bool[]"
            },
            {
                "internalType": "uint256",
                "name": "_deadline",
                "type": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "name": "claimMultiple"
    }
]

export const IEmergencyWithdrawalAbi: Abi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "pool",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "escrow",
                "type": "address"
            }
        ],
        "name": "Approved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "pool",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "escrow",
                "type": "address"
            }
        ],
        "name": "Unapproved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "pool",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "escrow",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "contract IERC20",
                "name": "token",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Withdrawal",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_pool",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_escrow",
                "type": "address"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IBasePool",
                "name": "_pool",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_onBehalfOf",
                "type": "address"
            }
        ],
        "name": "collectEmergency",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_pool",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_escrow",
                "type": "address"
            }
        ],
        "name": "isApproved",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_pool",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_escrow",
                "type": "address"
            }
        ],
        "name": "unapprove",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

export const WALLET_CONNECT_PROJECT_ID = 'f8617e1540e86f55af62bbd739df69e4'
