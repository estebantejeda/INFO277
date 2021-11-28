interface AssetsDiscountDetails{
  id: number;
  workedDays: number;
  baseSalary: number;
  gratification: number;
  commission: number;
  taxable: number;
  refugeesAmount: number;
  totalAssets: number;
  pension: number;
  health: number;
  socialSecurity: number;
  totalForecast: number;
  familyWelfare: number;
  otherDiscount: number;
  totalDiscount: number;
  netSalary: number;
  date: Date;
  employee: Employee;
}

interface Employee{
  id: number;
  rut: string;
  name: string;
  gender: string;
  birthDate: Date;
  refugees: number;
  baseSalary: number;
  salesCommission: number;
  afp: Afp;
  isapre: Isapre;
}

interface Afp{
  id: number;
  name: string;
  tax: number
}

interface Isapre{
  id: number;
  name: string;
}

export default AssetsDiscountDetails;
