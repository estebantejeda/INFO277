import express from 'express';
import {PORT} from './config/config';
import database from './config/database';
import router from './routes/index';
import associations from './models/associations';
import cors from 'cors';

import entry from './config/evaluationEntry';

const app = express();
associations();

const allowedOrigins = ['http://localhost:4200'];
const options: cors.CorsOptions = {origin: allowedOrigins};
app.use(cors(options));

app.use(express.json());
app.use(router);

database.sync({force: true}).then(() => {
    app.listen(PORT, () => {
        console.log("Conexión establecida");
        entry().then(x => console.log(x));
    });
});

