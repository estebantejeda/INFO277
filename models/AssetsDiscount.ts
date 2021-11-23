import {DataTypes} from "sequelize";
import database from "../config/database";

const AssetsDiscount = database.define('assets_discount', {
    workedDays: {
        type: DataTypes.INTEGER
    },
    baseSalary: {
        type: DataTypes.INTEGER
    },
    gratification: {
        type: DataTypes.INTEGER
    },
    commission: {
        type: DataTypes.DOUBLE
    },
    taxable: {
        type: DataTypes.INTEGER
    },
    refugeesAmount: {
        type: DataTypes.INTEGER
    },
    totalAssets: {
        type: DataTypes.DOUBLE
    },
    pension: {
        type: DataTypes.DOUBLE
    },
    health: {
        type: DataTypes.DOUBLE
    },
    socialSecurity: {
        type: DataTypes.DOUBLE
    },
    totalForecast: {
        type: DataTypes.DOUBLE
    },
    familyWelfare: {
        type: DataTypes.DOUBLE
    },
    otherDiscount: {
        type: DataTypes.DOUBLE
    },
    totalDiscount: {
        type: DataTypes.DOUBLE
    },
    netSalary: {
        type: DataTypes.DOUBLE
    }
});

export default AssetsDiscount;