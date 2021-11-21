import {DataTypes} from "sequelize";
import database from "../config/database";

const Account = database.define('account', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

export default Account;