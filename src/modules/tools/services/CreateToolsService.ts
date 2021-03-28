import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Tools from '../infra/typeorm/entities/Tools';

import ToolsRepository from '../repositories/ToolsRepository';

interface Request {
  title: string;
  link: string;
  description: string;
  tags: string;
}

class CreateToolsService {
  public async execute({
    title,
    link,
    description,
    tags,
  }: Request): Promise<Tools> {
    const toolsRepository = getCustomRepository(ToolsRepository);

    const findToolRegistred = await toolsRepository.findByTitle(title);

    if (findToolRegistred) {
      throw new AppError('This tool is already registered', 401);
    }

    const tools = toolsRepository.create({
      title,
      link,
      description,
      tags,
    });

    await toolsRepository.save(tools);

    return tools;
  }
}

export default CreateToolsService;
