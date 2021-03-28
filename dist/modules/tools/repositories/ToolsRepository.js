"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Tools = _interopRequireDefault(require("../infra/typeorm/entities/Tools"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ToolsRepository = (_dec = (0, _typeorm.EntityRepository)(_Tools.default), _dec(_class = class ToolsRepository extends _typeorm.Repository {
  async findByTitle(title) {
    const findTools = await this.findOne({
      where: {
        title
      }
    });
    return findTools || null;
  }

  async convertTagsToArray(title) {
    const findTools = await this.findOne({
      where: {
        title
      }
    });
    return findTools || null;
  }

}) || _class);
var _default = ToolsRepository;
exports.default = _default;