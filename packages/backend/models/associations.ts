import Product from "./product";
import Provider from "./provider";
import Customer from "./customer";
import PurchaseLedger from "./purchaseLedger";
import SaleLedger from "./saleLedger";
import Purchase from "./Purchase";
import Account from "./Account";
import Afp from "./Afp";
import Employee from "./Employee";
import Isapre from "./Isapre";
import AssetsDiscount from "./AssetsDiscount";

const init = () => {
    Product.hasOne(PurchaseLedger, {
        foreignKey: {allowNull: false}
    });
    PurchaseLedger.belongsTo(Product);

    Provider.hasOne(PurchaseLedger,{
        foreignKey: {allowNull: false}
    });
    PurchaseLedger.belongsTo(Provider);

    Product.hasOne(SaleLedger, {
        foreignKey: {allowNull: false}
    });
    PurchaseLedger.belongsTo(Product);

    Customer.hasOne(SaleLedger, {
        foreignKey: {allowNull: false}
    });
    SaleLedger.belongsTo(Customer);

    Provider.hasOne(Purchase, {
        foreignKey: {allowNull: false}
    });
    Purchase.belongsTo(Provider);

    Account.hasOne(Purchase, {
        foreignKey: {allowNull: false}
    });
    Purchase.belongsTo(Account);

    Afp.hasOne(Employee, {
        foreignKey: {allowNull: true}
    });
    Employee.belongsTo(Afp);

    Isapre.hasOne(Employee, {
        foreignKey: {allowNull: true}
    });
    Employee.belongsTo(Isapre);

    Employee.hasOne(AssetsDiscount, {
        foreignKey: {allowNull: true}
    });
    AssetsDiscount.belongsTo(Employee);
}

export default init;