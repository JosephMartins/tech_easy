import 'reflect-metadata';
import dotenv from 'dotenv';
import express, { Response, Request, NextFunction } from 'express';
import 'express-async-errors';

import AppError from '../../errors/AppError';
import routes from './routes';

import '../typeorm';

dotenv.config();

const app = express();

app.use(express.json());

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

app.listen(3000, () => {
  console.log('🚀 Server started on port 3000!!');
});
