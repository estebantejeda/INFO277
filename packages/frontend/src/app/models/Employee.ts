class Employee {
  id?: number;
  rut: string;
  name: string;
  gender: number;
  birthDate: Date;
  refugees: number;
  baseSalary: number;
  salesCommission: number;
  afpId: number;
  isapreId: number;

  constructor(rut: string, name: string, gender: number, birthDate: Date, refugees: number, baseSalary: number, salesCommission: number, afpId: number, isapreId: number) {
    this.rut = rut;
    this.name = name;
    this.gender = gender;
    this.birthDate = birthDate;
    this.refugees = refugees;
    this.baseSalary = baseSalary;
    this.salesCommission = salesCommission;
    this.afpId = afpId;
    this.isapreId = isapreId;
  }

}

export default Employee;
