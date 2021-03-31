import { Router } from 'express';
import { getCustomRepository, Like } from 'typeorm';

import ToolsRepository from '@modules/tools/repositories/ToolsRepository';
import CreateToolsService from '@modules/tools/services/CreateToolsService';

const toolsRouter = Router();

toolsRouter.get('/', async (request, response) => {
  const toolsRepository = getCustomRepository(ToolsRepository);

  const tools = await toolsRepository.find({ relations: ['user'] });
  const toolsTagConvertedArray = tools.map(tool => ({
    title: tool.title,
    link: tool.link,
    description: tool.description,
    id: tool.id,
    tags: tool.tags.split(','),
    user_id: tool.user_id,
    user: tool.user.email,
  }));

  return response.json(toolsTagConvertedArray);
});

toolsRouter.post('/', async (request, response) => {
  const { title, link, description, tags, user_id } = request.body;
  const tagsConvertedToString = tags.toString();
  const createToolsService = new CreateToolsService();

  const tool = await createToolsService.execute({
    title,
    link,
    description,
    tags: tagsConvertedToString,
    user_id,
  });

  return response.json(tool);
});

toolsRouter.get('/tool', async (request, response) => {
  const { tag } = request.query;

  const toolsRepository = getCustomRepository(ToolsRepository);
  const tools = await toolsRepository.find({
    tags: Like(`%${tag}%`),
  });

  return response.json(tools);
});

toolsRouter.delete(
  '/tools/:id',

  async (request, response) => {
    const { id } = request.params;

    const toolsRepository = getCustomRepository(ToolsRepository);
    const toolRemove = await toolsRepository.findOne(id);

    if (toolRemove) {
      await toolsRepository.remove(toolRemove);
      return response.json(`O item com id: ${id} foi deletado com sucesso`);
    }
    return response.json(`Item não encontrado`);
  },
);

export default toolsRouter;
