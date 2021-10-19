interface Kardex{
  id?: number;
  date: Date;
  price: number;
  quantity: number;
  assets: number;
  productId: number;
  saleLedgerId: number;
}

export default Kardex;
