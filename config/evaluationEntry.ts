import Product from "../models/product";
import Provider from "../models/provider";
import PurchaseLedger from "../models/purchaseLedger";
import Kardex from "../models/kardex";
import Customer from "../models/customer";
import SaleLedger from "../models/saleLedger";
import Account from "../models/Account";
import Purchase from "../models/Purchase";
import Afp from "../models/Afp";
import Isapre from "../models/Isapre";
import Parameters from "../models/Parameters";
import Employee from "../models/Employee";
import AssetsDiscount from "../models/AssetsDiscount";

const init = async () => {
    await createProducts();
    await createProviders();
    await createPurchases();
    await createCustomers();
    await createSales();
    await createAccounts();
    await createPurchaseLedger();
    await createAfp();
    await createIsapre();
    await createParameters();
    await createEmployee();
    await createAssetsDiscount();
    return new Promise((resolve) => {
        resolve("BD cargada con éxito");
    });
}

const createProducts = async () => {
    await Product.create({
        id: 1,
        description: "Tablet Lenovo",
        cost: 1000,
        date: new Date(),
        stock: 5,
        price: 2000
    });
    await Product.create({
        id: 2,
        description: "Celular Xiaomi RN5",
        cost: 500,
        date: new Date(),
        stock: 10,
        price: 1000
    });
    await Product.create({
        id: 3,
        description: "Parlante Sony",
        cost: 250,
        date: new Date(),
        stock: 50,
        price: 500
    });
}

const createProviders = async () => {
    await Provider.create({
        rut: "12345678-9",
        name: "Lenovo",
        companyName: "Lenovo SA",
        lineBusiness: "Venta Tablets",
        address: "Direccion generica #1",
        city: "Valdivia",
        email: "lenovo@lenovo.com"
    });
    await Provider.create({
        rut: "12345678-8",
        name: "Xiaomi",
        companyName: "Xiaomi SA",
        lineBusiness: "Venta Celulares",
        address: "Direccion generica #2",
        city: "Osorno",
        email: "xiaomi@xiaomi.com"
    });
    await Provider.create({
        rut: "12345678-7",
        name: "Sony",
        companyName: "Sony SA",
        lineBusiness: "Venta parlantes",
        address: "Direccion generica #3",
        city: "Pto. Montt",
        email: "sony@sony.com"
    });
}

const createPurchases = async () => {
    const product1 = await Product.findByPk(1);
    await product1?.increment('stock', {by: 5});
    await PurchaseLedger.create({
        docNumber: 1111,
        date: new Date(),
        stock: 5,
        price: 1000,
        total: 5000,
        providerId: 1,
        productId: 1
    });
    await Kardex.create({
        productId: 1,
        date: new Date(),
        docNumber: 1111,
        price: 1000,
        quantity: 5,
        assets: 0
    });
    const product2 = await Product.findByPk(2);
    await product2?.increment('stock', {by: 15});
    await PurchaseLedger.create({
        docNumber: 2222,
        date: new Date(),
        stock: 15,
        price: 500,
        total: 2500000,
        providerId: 2,
        productId: 2
    });
    await Kardex.create({
        productId: 2,
        date: new Date(),
        docNumber: 2222,
        price: 500,
        quantity: 15,
        assets: 0
    });
    const product3 = await Product.findByPk(3);
    await product3?.increment('stock', {by: 25});
    await PurchaseLedger.create({
        docNumber: 3333,
        date: new Date(),
        stock: 25,
        price: 250,
        total: 6250,
        providerId: 3,
        productId: 3
    });
    await Kardex.create({
        productId: 3,
        date: new Date(),
        docNumber: 3333,
        price: 250,
        quantity: 25,
        assets: 0
    });
}

const createCustomers = async () => {
    await Customer.create({
        rut: "98765432-1",
        name: "Esteban",
        address: "Direccion generica #4",
        city: "Osorno",
        email: "esteban@esteban.cl"
    });
    await Customer.create({
        rut: "98765432-2",
        name: "Nicolás",
        address: "Direccion generica #5",
        city: "Osorno",
        email: "esteban@nicolas.cl"
    });
    await Customer.create({
        rut: "98765432-3",
        name: "Pricila",
        address: "Direccion generica #6",
        city: "Valdivia",
        email: "pricila@pricila.cl"
    });
}

const createSales = async () => {
    const product1 = await Product.findByPk(1);
    await product1?.decrement('stock', {by: 2});
    await SaleLedger.create({
        docNumber: 9999,
        date: new Date(),
        docType: "boleta",
        payType: "efectivo",
        stock: 2,
        price: 1500,
        total: 3000,
        customerId: 1,
        productId: 1
    });
    await Kardex.create({
        productId: 1,
        date: new Date(),
        docNumber: 9999,
        price: 1500,
        quantity: 0,
        assets: 2
    });
    const product2 = await Product.findByPk(2);
    await product2?.decrement('stock', {by: 5});
    await SaleLedger.create({
        docNumber: 8888,
        date: new Date(),
        docType: "factura",
        payType: "debito",
        stock: 5,
        price: 500,
        total: 25000,
        customerId: 2,
        productId: 2
    });
    await Kardex.create({
        productId: 2,
        date: new Date(),
        docNumber: 8888,
        price: 500,
        quantity: 0,
        assets: 5
    });
    const product3 = await Product.findByPk(3);
    await product3?.decrement('stock', {by: 1});
    await SaleLedger.create({
        docNumber: 7777,
        date: new Date(),
        docType: "boleta",
        payType: "credito",
        stock: 1,
        price: 5000,
        total: 5000,
        customerId: 3,
        productId: 3
    });
    await Kardex.create({
        productId: 3,
        date: new Date(),
        docNumber: 7777,
        price: 5000,
        quantity: 0,
        assets: 1
    });
}

const createAccounts = async () => {
    await Account.bulkCreate([
        {name: "Mercadería"},
        {name: "Fletes"},
        {name: "Mat. Oficina"},
        {name: "Luz"},
        {name: "Agua"},
        {name: "Teléfono"},
        {name: "Celular"},
        {name: "Arriendo"},
        {name: "Gastos comunes"},
    ]);
}

const createPurchaseLedger = async () => {
    await Purchase.bulkCreate([
    {
        docNumber: 99999,
        docType: 1,
        providerId: 1,
        correlative: 1,
        net: 4000,
        isCredit: true,
        date: new Date(),
        accountId: 2
    },
    {
        docNumber: 99998,
        docType: 1,
        providerId: 1,
        correlative: 2,
        net: 5000,
        isCredit: true,
        date: new Date(),
        accountId: 2
    },
    {
        docNumber: 99996,
        docType: 1,
        providerId: 1,
        correlative: 3,
        net: 5000,
        isCredit: true,
        date: new Date(),
        accountId: 2
    },
    {
        docNumber: 99997,
        docType: 1,
        providerId: 1,
        correlative: 4,
        net: 5000,
        isCredit: true,
        date: new Date(),
        accountId: 3
    }
    ]);
}

const createAfp = async () => {
    await Afp.bulkCreate([
        {
            name: "A.F.P. CONCORDIA",
            tax: randomTax()
        },
        {
            name: "A.F.P. EL LIBERTADOR",
            tax: randomTax()
        },
        {
            name: "A.F.P. HABITAT",
            tax: randomTax()
        },
        {
            name: "A.F.P. UNO",
            tax: randomTax()
        },
        {
            name: "A.F.P. MAGISTER",
            tax: randomTax()
        },
        {
            name: "A.F.P. PLANVITAL",
            tax: randomTax()
        },
        {
            name: "A.F.P. PROVIDA",
            tax: randomTax()
        }
    ]);
}

const createIsapre = async () => {
    await Isapre.bulkCreate([
        {name: "ISAPRE CRUZ BLANCA"},
        {name: "ISAPRE CONSALUD"},
        {name: "ISAPRE COLMENA GOLDEN CROSS"},
        {name: "ISAPRE BANMEDICA"},
        {name: "ISAPRE MAS VIDA"},
    ]);
}

const createParameters = async () => {
    await Parameters.create({
        uf: 30683,
        utm: 56476,
        refugeesAmount: 13823,
        daysPerMonth: daysInMonth(),
        incomeTax: 11
    });
}

const createEmployee = async () => {
    await Employee.create({
        rut: "3579246-8",
        name: "Juán Topo",
        gender: 1,
        birthDate: new Date(),
        refugees: 1,
        baseSalary: 150000,
        salesCommission: 15,
        afpId: 1,
        isapreId: 1
    });
    await Employee.create({
        rut: "16875498-5",
        name: "Homero Simpson",
        gender: 1,
        birthDate: new Date(),
        refugees: 4,
        baseSalary: 250000,
        salesCommission: 5,
        afpId: 3,
        isapreId: 2
    });
}

const createAssetsDiscount = async () => {
    await AssetsDiscount.create({
        workedDays: 20,
        gratification: 100000,
        familyWelfare: 2000,
        otherDiscount: 50000,
        employeeId: 1,
        date: "2021-11",
        baseSalary: 150000,
        commission: 0,
        taxable: 150000+100000+0,
        refugeesAmount: 1*13823,
        totalAssets: (150000+100000+0)+(1*13823),
        pension: (150000+100000+0)*0.1,
        health: (150000+100000+0)*0.07,
        socialSecurity: (150000+100000+0)*7,
        totalForecast: ((150000+100000+0)*0.1)+((150000+100000+0)*0.07)+((150000+100000+0)*7),
        totalDiscount: ((150000+100000+0)*0.1)+((150000+100000+0)*0.07)+((150000+100000+0)*7)+2000+50000,
        netSalary: ((150000+100000+0)+(1*13823))-(((150000+100000+0)*0.1)+((150000+100000+0)*0.07)+((150000+100000+0)*7)+2000+50000)
    });
    await AssetsDiscount.create({
        workedDays: 20,
        gratification: 100000,
        familyWelfare: 2000,
        otherDiscount: 50000,
        employeeId: 1,
        date: "2021-10",
        baseSalary: 150000,
        commission: 0,
        taxable: 150000+100000+0,
        refugeesAmount: 1*13823,
        totalAssets: (150000+100000+0)+(1*13823),
        pension: (150000+100000+0)*0.1,
        health: (150000+100000+0)*0.07,
        socialSecurity: (150000+100000+0)*7,
        totalForecast: ((150000+100000+0)*0.1)+((150000+100000+0)*0.07)+((150000+100000+0)*7),
        totalDiscount: ((150000+100000+0)*0.1)+((150000+100000+0)*0.07)+((150000+100000+0)*7)+2000+50000,
        netSalary: ((150000+100000+0)+(1*13823))-(((150000+100000+0)*0.1)+((150000+100000+0)*0.07)+((150000+100000+0)*7)+2000+50000)
    });
}

const randomTax = (): number => {
    const random = Math.random()*10;
    const tax = random.toFixed(2);
    return Number(tax);
}

const daysInMonth = (): number => {
    const now = new Date();
    const days = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate()
    return days;
}

export default init;