import {Sequelize} from "sequelize";
import * as config from './config';

const database = new Sequelize(
    config.DB_NAME,
    config.DB_USER,
    config.DB_PASS,{
        host: config.DB_HOST,
        dialect: "mysql"
    });

export default database;