import {DataTypes} from "sequelize";
import database from "../config/database";

const SaleLedger = database.define('sale_ledger', {
    docNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'doc_number'
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    docType: {
        type: DataTypes.ENUM,
        values: ["factura", "boleta"]
    },
    payType: {
        type: DataTypes.ENUM,
        values: ["efectivo", "credito", "debito"]
    },
    stock: {
        type: DataTypes.INTEGER,
        validate: {min: 1}
    },
    price: DataTypes.INTEGER,
    total: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default SaleLedger