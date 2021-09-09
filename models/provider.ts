import {DataTypes} from "sequelize";
import database from "../config/database";

const Provider = database.define('provider', {
    rut: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lineBusiness: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        validate: {isEmail: true}
    }
});

export default Provider;