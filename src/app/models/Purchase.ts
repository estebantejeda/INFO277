class Purchase{
  docNumber: number;
  date: Date;
  rut: string;
  id: number;
  stock: number;
  price: number;
  total: number;

  constructor(docNumber: number, date: Date, rut: string, id: number, stock: number, price: number, total: number) {
    this.docNumber = docNumber;
    this.date = date;
    this.rut = rut;
    this.id = id;
    this.stock = stock;
    this.price = price;
    this.total = total;
  }

}

export default Purchase;
