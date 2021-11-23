import {DataTypes} from "sequelize";
import database from "../config/database";

const Parameters = database.define('parameters', {
    uf: {
        type: DataTypes.DOUBLE
    },
    utm: {
        type: DataTypes.DOUBLE
    },
    refugeesAmount: {
        type: DataTypes.DOUBLE
    },
    daysPerMonth: {
        type: DataTypes.INTEGER
    },
    incomeTax: {
        type: DataTypes.DOUBLE
    }
});

export default Parameters;