import express from 'express';
import Config from './config/config';
import database from './config/database';
import router from './routes/index';

const config = new Config();
const app = express();

app.use(express.json());
app.use(router);

database.sync({force: true}).then(() => {
    app.listen(config.PORT, () => console.log("Conexión establecida"));
});