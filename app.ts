import express from 'express';
import {PORT} from './config/config';
import database from './config/database';
import router from './routes/index';

const app = express();

app.use(express.json());
app.use(router);

database.sync({force: true}).then(() => {
    app.listen(PORT, () => console.log("Conexión establecida"));
});
