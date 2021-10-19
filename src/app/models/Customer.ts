class Customer{
  id?: string;
  rut: string;
  name: string;
  address: string;
  city: string;
  email: string;

  constructor(rut: string, name: string, address: string, city: string, email: string) {
    this.rut = rut;
    this.name = name;
    this.address = address;
    this.city = city;
    this.email = email;
  }
}

export default Customer;
