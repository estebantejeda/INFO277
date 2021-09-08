import express from 'express';
import database from './config/database';
import Config from './config/config';
import Product from "./models/product";

const config = new Config();

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    Product.create({...req.body})
        .then((msj) => res.json(msj))
        .catch(err => res.json(err));
});

database.sync({force: true}).then(() => {
    app.listen(config.PORT, () => console.log("Conexión establecida"));
});