import Kardex from "./kardex";
import Product from "./product";
import SaleLedger from "./saleLedger";

const init = () => {
    Product.hasOne(Kardex, {
        foreignKey: {allowNull: false}
    });

    SaleLedger.hasOne(Kardex, {
        foreignKey: {allowNull: false}
    });
}

export default init;