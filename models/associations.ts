import Product from "./product";
import PurchaseLedger from "./purchaseLedger";
import Provider from "./provider";
import Kardex from "./kardex";

const init = () => {
    Product.hasOne(PurchaseLedger, {
        foreignKey: {allowNull: false}
    });
    Provider.hasOne(PurchaseLedger,{
        foreignKey: {allowNull: false}
    });

    PurchaseLedger.hasOne(Kardex, {
        foreignKey: {allowNull: true}
    })
    Kardex.belongsTo(PurchaseLedger);
}

export default init;