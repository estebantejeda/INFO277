class AssetsDiscount{
  id?: number;
  rut: string;
  workedDays: number;
  baseSalary?: number;
  gratification: number;
  commission?: number;
  taxable?: number;
  refugeesAmount?: number;
  totalAssets?: number;
  pension?: number;
  health?: number;
  socialSecurity?: number;
  totalForecast?: number;
  familyWelfare: number;
  otherDiscount: number;
  totalDiscount?: number;
  netSalary?: number;
  date: Date;

  constructor(workedDay: number, gratification: number, familyWelfare: number, otherDiscount: number, rut: string, date: Date) {
    this.workedDays = workedDay;
    this.gratification = gratification;
    this.familyWelfare = familyWelfare;
    this.otherDiscount = otherDiscount;
    this.rut = rut;
    this.date = date;
  }
}

export default AssetsDiscount;
