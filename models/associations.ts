import Product from "./product";
import PurchaseLedger from "./purchaseLedger";
import Provider from "./provider";
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

    Provider.hasOne(SaleLedger, {
        foreignKey: {allowNull: false}
    });
    SaleLedger.belongsTo(Provider);
}

export default init;