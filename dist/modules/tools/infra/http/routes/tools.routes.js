"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _typeorm = require("typeorm");

var _ToolsRepository = _interopRequireDefault(require("../../../repositories/ToolsRepository"));

var _CreateToolsService = _interopRequireDefault(require("../../../services/CreateToolsService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ensureAuthenticated from '../middlewares/ensureAuthenticated';
const toolsRouter = (0, _express.Router)(); // toolsRouter.use(ensureAuthenticated);

toolsRouter.get('/', async (request, response) => {
  const toolsRepository = (0, _typeorm.getCustomRepository)(_ToolsRepository.default);
  const tools = await toolsRepository.find();
  const toolsTagConvertedArray = tools.map(tool => ({
    title: tool.title,
    link: tool.link,
    description: tool.description,
    id: tool.id,
    tags: tool.tags.split(',')
  }));
  return response.json(toolsTagConvertedArray);
});
toolsRouter.post('/', async (request, response) => {
  const {
    title,
    link,
    description,
    tags
  } = request.body;
  const tagsConvertedToString = tags.toString();
  const createToolsService = new _CreateToolsService.default();
  const tool = await createToolsService.execute({
    title,
    link,
    description,
    tags: tagsConvertedToString
  });
  console.log(tool);
  return response.json(tool);
});
toolsRouter.get('/tools', async (request, response) => {
  const {
    tag
  } = request.query;
  const toolsRepository = (0, _typeorm.getCustomRepository)(_ToolsRepository.default);
  const tools = await toolsRepository.find({
    tags: (0, _typeorm.Like)(`%${tag}%`)
  });
  return response.json(tools);
});
toolsRouter.delete('/tools/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const toolsRepository = (0, _typeorm.getCustomRepository)(_ToolsRepository.default);
  console.log('oi');
  const toolRemove = await toolsRepository.findOne(id);

  if (toolRemove) {
    await toolsRepository.remove(toolRemove);
    return response.json(`O item com id: ${id} foi deletado com sucesso`);
  }

  return response.json(`Item não encontrado`);
});
var _default = toolsRouter;
exports.default = _default;