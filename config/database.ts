import {Sequelize} from "sequelize";
import Config from './config';

let config = new Config();

const database = new Sequelize(
    config.DB_NAME,
    config.DB_USER,
    config.DB_PASS,{
        host: config.DB_HOST,
        dialect: "mysql"
    });

export default database;