export class Product{
  id?: string;
  description: string;
  cost: number;
  date: Date;
  stock: number;
  price: number;

  constructor(description: string, cost: number, date: Date, stock: number, price: number) {
    this.description = description;
    this.cost = cost;
    this.date = date;
    this.stock = stock;
    this.price = price;
  }
}
