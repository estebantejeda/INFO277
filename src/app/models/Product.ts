class Product{
  id?: number;
  description: string;
  cost: number;
  date: Date;
  stock: number;
  price: number;

  constructor(description: string, cost: number, date: Date, stock: number, price: number, id?: number) {
    this.description = description;
    this.cost = cost;
    this.date = date;
    this.stock = stock;
    this.price = price;
    this.id = id;
  }
}

export default Product;
