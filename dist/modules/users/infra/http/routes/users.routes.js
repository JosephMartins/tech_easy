"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _CreateUserService = _interopRequireDefault(require("../../../services/CreateUserService"));

var _typeorm = require("typeorm");

var _User = _interopRequireDefault(require("../../typeorm/entities/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const usersRouter = (0, _express.Router)();
usersRouter.post('/', async (request, response) => {
  const {
    email,
    password
  } = request.body;
  const createUserService = new _CreateUserService.default();
  const user = await createUserService.execute({
    email,
    password
  });
  return response.json(user);
});
usersRouter.get('/', async (request, response) => {
  const usersRepository = (0, _typeorm.getRepository)(_User.default);
  const user = await usersRepository.find();
  return response.json(user);
});
var _default = usersRouter;
exports.default = _default;