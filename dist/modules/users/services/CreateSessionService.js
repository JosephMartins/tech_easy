"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _bcrypt = require("bcrypt");

var _jsonwebtoken = require("jsonwebtoken");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _auth = _interopRequireDefault(require("../../../config/auth"));

var _User = _interopRequireDefault(require("../infra/typeorm/entities/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateSessionService {
  async execute({
    email,
    password
  }) {
    const usersRepository = (0, _typeorm.getRepository)(_User.default);
    const user = await usersRepository.findOne({
      where: [{
        email
      }]
    });

    if (!user) {
      throw new _AppError.default('Incorrect email/password combination.', 401);
    }

    const passwordMatched = await (0, _bcrypt.compare)(password, user.password);

    if (!passwordMatched) {
      throw new _AppError.default('Incorrect email/password combination.', 401);
    }

    const {
      expiresIn,
      secret
    } = _auth.default.jwt;
    const token = (0, _jsonwebtoken.sign)({}, secret, {
      subject: user.id,
      expiresIn
    });
    return {
      user,
      token
    };
  }

}

var _default = CreateSessionService;
exports.default = _default;