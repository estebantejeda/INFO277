interface AssetsDiscountEmployee{
  id: number,
  date: Date,
  netSalary: number;
  employee: Employee;
}

interface Employee{
  name: string;
}

export default AssetsDiscountEmployee;

