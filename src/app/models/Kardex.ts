interface Kardex{
  id?: number;
  quantity: number;
  assets: number;
  purchaseLedgerId: number;
  purchase_ledger: PurchaseLedger;
}

interface PurchaseLedger{
  id: number;
  docNumber: number;
  date: Date;
  stock: number;
  price: number;
  total: number;
  productId: number;
  providerId: number;
}

export default Kardex;
