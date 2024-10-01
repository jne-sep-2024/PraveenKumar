import express from 'express';
import { config } from './config/config.js';
import routes from './routes/main.js';
import bodyParser from 'body-parser';

const { appConfig } = config();

const app = express();

app.use(bodyParser.json());

app.use('/', routes)

app.listen(appConfig.port, () => {
    console.log(`Server is listening to the port ${appConfig.port}`);
})
