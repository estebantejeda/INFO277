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
        allowNull: false,
        field: 'company_name'
    },
    lineBusiness: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'line_business'
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {isEmail: true}
    }
});

export default Provider;