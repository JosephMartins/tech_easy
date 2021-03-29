import 'reflect-metadata';
import dotenv from 'dotenv';
import express, { Response, Request, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';

import AppError from '../../errors/AppError';
import routes from './routes';

import '../typeorm';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Server started port: 3001');
});
