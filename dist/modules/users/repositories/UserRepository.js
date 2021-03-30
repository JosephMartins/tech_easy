"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _User = _interopRequireDefault(require("../infra/typeorm/entities/User"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ToolsRepository = (_dec = (0, _typeorm.EntityRepository)(_User.default), _dec(_class = class ToolsRepository extends _typeorm.Repository {}) || _class);
var _default = ToolsRepository;
exports.default = _default;