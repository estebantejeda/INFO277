class Parameters{
  id?: number;
  createdAt?: Date;
  uf: number;
  utm: number;
  refugeesAmount: number;
  daysPerMonth: number;
  incomeTax: number;

  constructor(uf: number, utm: number, refugeesAmount: number, daysPerMonth: number, incomeTax: number) {
    this.uf = uf;
    this.utm = utm;
    this.refugeesAmount = refugeesAmount;
    this.daysPerMonth = daysPerMonth;
    this.incomeTax = incomeTax;
  }
}

export default Parameters;
