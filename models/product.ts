import {DataTypes} from "sequelize";
import database from "../config/database";

const Product = database.define('product', {
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cost: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {min: 0}
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default Product;