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
      allowNull: false
    },
    netValue: {
        type: DataTypes.DOUBLE
    },
    tax: {
      type: DataTypes.DOUBLE
    },
    total: {
        type: DataTypes.DOUBLE
    }
});

export default SaleLedger