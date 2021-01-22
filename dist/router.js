"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

var _logMiddleware = require('./app/middlewares/logMiddleware'); var _logMiddleware2 = _interopRequireDefault(_logMiddleware);

const routes = new (0, _express.Router)();

routes.use(_logMiddleware2.default.register);

routes.get('/characters', _UserController2.default.index);
routes.get('/characters/:id', _UserController2.default.show);

exports. default = routes;
