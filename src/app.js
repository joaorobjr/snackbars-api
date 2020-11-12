import express from 'express';
import compression from 'compression';
import logger from '../server/services/logger.service.js';
import categoryRouter from './routes/category.js';

const app = express();
app.use(express.json());
app.use(compression());

app.use('/categories', categoryRouter);

global.logger = logger;

export default app;
