import {DataTypes} from "sequelize";
import database from "../config/database";

const Customer = database.define('customer', {
    rut: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        validate: {isEmail: true},
        unique: true
    }
});

export default Customer;