import {DataTypes} from "sequelize";
import database from "../config/database";

const Kardex = database.define('kardex', {
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    docNumber: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {min: 0}
    },
    assets: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {min: 0}
    }
});

export default Kardex;