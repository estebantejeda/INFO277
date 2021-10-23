import {DataTypes} from "sequelize";
import database from "../config/database";

const PurchaseLedger = database.define('purchase_ledger', {
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
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        validate: {min: 1}
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default PurchaseLedger;