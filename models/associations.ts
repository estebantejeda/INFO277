import Product from "./product";
import Provider from "./provider";
import Customer from "./customer";
import PurchaseLedger from "./purchaseLedger";
import SaleLedger from "./saleLedger";

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
}

export default init;