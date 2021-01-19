"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

// import UserController from './app/controllers/UserController';
var _CharacterController = require('./app/controllers/CharacterController'); var _CharacterController2 = _interopRequireDefault(_CharacterController);
var _logMiddleware = require('./app/middlewares/logMiddleware'); var _logMiddleware2 = _interopRequireDefault(_logMiddleware);

// import logRequestsMiddleware from './app/middlewares/logRequests';

const routes = new (0, _express.Router)();

// routes.use(logRequestsMiddleware);
routes.use(_logMiddleware2.default.register);

// routes.get('/characters', UserController.index);
routes.get('/characters', _CharacterController2.default.index);
routes.get('/characters/:id', _CharacterController2.default.show);

exports. default = routes;
