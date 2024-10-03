import express from 'express';
import userRoutes from './routes/user.js';
import postRoutes from './routes/post.js';
import commentRoutes from './routes/comment.js';
import { config } from './config/config.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const { appConfig, dbConfig } = config();

const app = express();

app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/post', postRoutes);
app.use('/comment', commentRoutes);

mongoose.connect(dbConfig.url)
    .then(() => {
        console.log("Database connected successfully!.");

        app.listen(appConfig.port, () => {
            console.log(`Server is listening to the port ${appConfig.port}`);
        })
    })
    .catch((err) => console.log("connected Failed", err));