import * as dotenv from 'dotenv';
import path from 'path';

class Config {
    private readonly _DB_USER: string;
    private readonly _DB_PASS: string;
    private readonly _DB_NAME: string;
    private readonly _HOST: string;
    private readonly _PORT: number;

    constructor() {
        dotenv.config({path: path.resolve(__dirname, '../../.env')});
        this._DB_USER = process.env.DB_USER || "root";
        this._DB_PASS = process.env.DB_PASS || "toor";
        this._DB_NAME = process.env.DB_NAME || "test";
        this._HOST = process.env.DB_HOST || "127.0.0.1";
        this._PORT = parseInt(process.env.PORT as string)|| 3000;
    }

    get DB_USER(){
        return this._DB_USER;
    }
    get DB_PASS(){
        return this._DB_PASS;
    }
    get DB_NAME(){
        return this._DB_NAME;
    }
    get DB_HOST(){
        return this._HOST;
    }
    get PORT(){
        return this._PORT;
    }
}

export default Config;