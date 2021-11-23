import {DataTypes} from "sequelize";
import database from "../config/database";

const Employee = database.define('employee', {
    rut: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM,
        values: ["male", "female", "other"]
    },
    birthDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    refugees: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    baseSalary: {
        type: DataTypes.INTEGER,
    },
    salesCommission: {
        type: DataTypes.DOUBLE
    }
});

export default Employee;