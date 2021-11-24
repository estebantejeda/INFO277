interface SumPurchase{
  accountId: number;
  total: number;
  account: Account;
}

interface Account{
  name: string;
}

export default SumPurchase;
