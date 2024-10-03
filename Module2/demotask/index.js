import express from 'express';
import routes from './routes/user.js';
import { config } from './config/config.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const { appConfig, dbConfig } = config();

const app = express();

app.use(bodyParser.json());

app.use('/', routes);

mongoose.connect(dbConfig.url)
    .then(() => {
        console.log("Database connected successfully!.");

        app.listen(appConfig.port, () => {
            console.log(`Server is listening to the port ${appConfig.port}`);
        })
    })
    .catch((err) => console.log("connected Failed", err));