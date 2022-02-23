class Provider{
  id?: string;
  rut: string;
  name: string;
  companyName: string;
  lineBusiness: string;
  address: string;
  city: string;
  email: string;

  constructor(name: string, rut: string, companyName: string, lineBusiness: string, address: string, city: string, email: string) {
    this.name = name;
    this.rut = rut;
    this.companyName = companyName;
    this.lineBusiness = lineBusiness;
    this.address = address;
    this.city = city;
    this.email = email;
  }
}

export default Provider;
