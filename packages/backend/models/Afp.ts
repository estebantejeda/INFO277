import {DataTypes} from "sequelize";
import database from "../config/database";

const Afp = database.define('afp', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    tax: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
});

export default Afp;