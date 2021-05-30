import cookieParser from 'cookie-parser';
import express, { json, urlencoded } from 'express';
import morgan from 'morgan';

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

app.get('/', (_req, res) => {
  res.json({ startedAt });
});
app.use('/products', productsRouter);

export default app;
