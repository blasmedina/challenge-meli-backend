import cookieParser from 'cookie-parser';
import express, { json, urlencoded } from 'express';
import logger from 'morgan';

const startedAt = new Date();

const app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', (req, res) => {
  res.json({ startedAt });
});

export default app;
