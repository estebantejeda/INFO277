import {DataTypes} from "sequelize";
import database from "../config/database";

const Kardex = database.define('kardex', {
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
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
})

export default Kardex;