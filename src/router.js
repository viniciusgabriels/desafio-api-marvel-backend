import { Router } from 'express';

// import UserController from './app/controllers/UserController';
import CharacterController from './app/controllers/CharacterController';
import logMiddleware from './app/middlewares/logMiddleware';

// import logRequestsMiddleware from './app/middlewares/logRequests';

const routes = new Router();

// routes.use(logRequestsMiddleware);
routes.use(logMiddleware.register);

// routes.get('/characters', UserController.index);
routes.get('/characters', CharacterController.index);
routes.get('/characters/:id', CharacterController.show);

export default routes;
