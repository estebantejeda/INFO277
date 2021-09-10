import {DataTypes} from "sequelize";
import database from "../config/database";

const SaleLedger = database.define('sale_ledger', {
    month: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            min: 0,
            max: 12
        }
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {len: [4,4]}
    },
    docNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'doc_number'
    },
    netValue: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        field: 'net_value'
    },
    tax: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    total: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
});

export default SaleLedger