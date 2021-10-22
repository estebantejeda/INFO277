import DocType from "../enum/DocType";
import PayType from "../enum/PayType";

class Sale{
  docNumber: number;
  docType: DocType;
  payType: PayType;
  date: Date;
  rut: string;
  id: number;
  stock: number;
  price: number;
  total: number;

  constructor(docNumber: number, docType: DocType, payType: PayType, date: Date, rut: string, id: number, stock: number, price: number, total: number) {
    this.docNumber = docNumber;
    this.docType = docType;
    this.payType = payType;
    this.date = date;
    this.rut = rut;
    this.id = id;
    this.stock = stock;
    this.price = price;
    this.total = total;
  }

}
export default Sale;
