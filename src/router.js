import { Router } from 'express';

import UserController from './app/controllers/UserController';
import ComicController from './app/controllers/ComicController';
import logMiddleware from './app/middlewares/logMiddleware';

const routes = new Router();

routes.use(logMiddleware.register);

routes.get('/characters', UserController.index);
routes.get('/characters/:id', UserController.show);

routes.get('/comics/:id', ComicController.show);

export default routes;
