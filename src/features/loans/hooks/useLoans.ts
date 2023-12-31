import { v4 as uuidV4 } from 'uuid';

import { CURRENCY } from '@/utils/currency';

import { Loan } from '../types';

const FAKE_ROW: Loan = {
  id: '1',
  loan: CURRENCY.RETH,
  loanId: CURRENCY.RPL,
  borrowed: {
    value: '0.11128082 rETH',
    explain: '($220.16)',
  },
  repayBefore: {
    value: '01/01/1970 03:00:00',
    explain: '54 years ago',
  },
  repaymentAmount: {
    value: '0.011354088 rETH',
    explain: '($22.46)',
  },
  collateralAmount: {
    value: '138.62201 rETH',
    explain: '($274,253.96)',
  },
};

export const useLoans = (filter?: string) => {
  const data: Loan[] =
    filter === 'PAST_LOANS'
      ? [FAKE_ROW]
      : Array(9)
          .fill(FAKE_ROW)
          .map((item) => ({ ...item, id: uuidV4() }));

  return { data };
};
