import {DataTypes} from "sequelize";
import database from "../config/database";

const Purchase = database.define('purchase', {
    docNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'doc_number'
    },
    docType: {
        type: DataTypes.ENUM,
        values: ["factura", "boleta"]
    },
    providerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    correlative: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    net: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isCredit:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

export default Purchase;