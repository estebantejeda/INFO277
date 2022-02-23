interface Kardex{
  id?: number;
  productId: number;
  date: Date;
  docNumber: number;
  price: number
  quantity: number;
  assets: number;
}

export default Kardex;
