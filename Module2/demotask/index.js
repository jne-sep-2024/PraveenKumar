import express from 'express';
import userRoutes from './routes/user.js';
import postRoutes from './routes/post.js';
import bankRoutes from './routes/bank.js';
import commentRoutes from './routes/comment.js';
import courseRoutes from './routes/courses.js';
import { config } from './config/config.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const { appConfig, dbConfig } = config();

const app = express();
app.use(cors()); 
app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/post', postRoutes);
app.use('/comment', commentRoutes);
app.use('/bank', bankRoutes);
app.use('/course', courseRoutes);

mongoose.connect(dbConfig.url)
    .then(() => {
        console.log("Database connected successfully!.");

        app.listen(appConfig.port, () => {
            console.log(`Server is listening to the port ${appConfig.port}`);
        })
    })
    .catch((err) => console.log("connected Failed", err));