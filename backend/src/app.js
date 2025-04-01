import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimiter from './middlewares/rateLimiter.js';
import urlRoutes from './routes/url.routes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(rateLimiter);

//routes
app.use('/api/url', urlRoutes);

export default app;