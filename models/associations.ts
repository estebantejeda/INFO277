import Product from "./product";
import PurchaseLedger from "./purchaseLedger";
import Provider from "./provider";

const init = () => {
    Product.hasOne(PurchaseLedger, {
        foreignKey: {allowNull: false}
    });

    Provider.hasOne(PurchaseLedger,{
        foreignKey: {allowNull: false}
    });
}

export default init;