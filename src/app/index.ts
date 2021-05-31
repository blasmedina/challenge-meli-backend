import cookieParser from 'cookie-parser';
import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import logErrorsMiddleware from '../middlewares/log-errors.middleware';
import errorHandlerMiddleware from '../middlewares/error-handler.middleware';
import notFoundMiddleware from '../middlewares/not-found.middleware';

import productsRouter from '../routes/products.router';

const startedAt = new Date();

const app = express();

app.use(
  morgan('dev', {
    skip: () => app.get('env') === 'test',
  }),
);
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.get('/', (_req, res) => {
  res.json({ startedAt });
});
app.use('/products', productsRouter);

app.use(logErrorsMiddleware, errorHandlerMiddleware, notFoundMiddleware);

export default app;
