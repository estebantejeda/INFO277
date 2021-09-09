import {DataTypes} from "sequelize";
import database from "../config/database";

const Customer = database.define('customer', {
    rut: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.INTEGER,
        validate: {isEmail: true}
    }
});

export default Customer;