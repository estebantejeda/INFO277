import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.resolve(__dirname, '../../.env')});

export const DB_USER = process.env.DB_USER || "root";
export const DB_PASS = process.env.DB_PASS || "toor";
export const DB_NAME = process.env.DB_NAME || "test";
export const DB_HOST = process.env.DB_HOST || "127.0.0.1";
export const PORT = parseInt(process.env.PORT as string)|| 3000;