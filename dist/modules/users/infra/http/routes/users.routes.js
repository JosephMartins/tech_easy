"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _CreateUserService = _interopRequireDefault(require("../../../services/CreateUserService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const usersRouter = (0, _express.Router)();
usersRouter.post('/', async (request, response) => {
  const {
    name,
    email,
    password
  } = request.body;
  const createUserService = new _CreateUserService.default();
  const user = await createUserService.execute({
    name,
    email,
    password
  });
  return response.json(user);
});
var _default = usersRouter;
exports.default = _default;