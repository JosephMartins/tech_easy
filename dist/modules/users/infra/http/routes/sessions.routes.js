"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _CreateSessionService = _interopRequireDefault(require("../../../services/CreateSessionService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sessionsRouter = (0, _express.Router)();
sessionsRouter.post('/', async (request, response) => {
  const {
    email,
    password
  } = request.body;
  const createSessionService = new _CreateSessionService.default();
  const {
    user,
    token
  } = await createSessionService.execute({
    email,
    password
  });
  return response.json({
    user,
    token
  });
});
var _default = sessionsRouter;
exports.default = _default;