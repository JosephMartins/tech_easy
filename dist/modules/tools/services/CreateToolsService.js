"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _ToolsRepository = _interopRequireDefault(require("../repositories/ToolsRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateToolsService {
  async execute({
    title,
    link,
    description,
    tags
  }) {
    const toolsRepository = (0, _typeorm.getCustomRepository)(_ToolsRepository.default);
    const findToolRegistred = await toolsRepository.findByTitle(title);

    if (findToolRegistred) {
      throw new _AppError.default('This tool is already registered', 401);
    }

    const tools = toolsRepository.create({
      title,
      link,
      description,
      tags
    });
    await toolsRepository.save(tools);
    return tools;
  }

}

var _default = CreateToolsService;
exports.default = _default;