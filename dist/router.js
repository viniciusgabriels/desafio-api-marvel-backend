"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
// import CharacterController from './app/controllers/CharacterController';

var _logRequests = require('./app/middlewares/logRequests'); var _logRequests2 = _interopRequireDefault(_logRequests);
// import logMiddleware from './app/middlewares/logMiddleware';

const routes = new (0, _express.Router)();

routes.use(_logRequests2.default);
// routes.use(logMiddleware.register);

routes.get('/characters', _UserController2.default.index);
routes.get('/characters/:id', _UserController2.default.show);
// routes.get('/characters', CharacterController.index);
// routes.get('/characters/:id', CharacterController.show);

exports. default = routes;
