import { Router } from 'express';

import CreateUserService from '@modules/users/services/CreateUserService';
import { getRepository } from 'typeorm';
import User from '../../typeorm/entities/User';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const createUserService = new CreateUserService();

  const user = await createUserService.execute({ email, password });

  return response.json(user);
});

usersRouter.get('/', async (request, response) => {
  const usersRepository = getRepository(User);
  const user = await usersRepository.find();
  return response.json(user);
});

export default usersRouter;
