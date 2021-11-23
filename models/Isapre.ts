import {DataTypes} from "sequelize";
import database from "../config/database";

const Isapre = database.define('isapre', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

export default Isapre;