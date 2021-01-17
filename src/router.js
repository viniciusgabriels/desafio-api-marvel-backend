import { Router } from 'express';

import UserController from './app/controllers/UserController';

import logRequestsMiddleware from './app/middlewares/logRequests';

const routes = new Router();

routes.use(logRequestsMiddleware);

routes.get('/characters', UserController.index);

export default routes;
