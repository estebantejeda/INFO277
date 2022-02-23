interface AfpEmployee {
  id: number;
  name: string;
  tax: number;
  employee: Employee;
}

interface Employee{
  id: number;
  rut: string;
  name: string;
  baseSalary: number;
}

export default AfpEmployee;
