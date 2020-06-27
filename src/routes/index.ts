import { Router } from 'express';

import feedsRouter from './feeds.routes';

const routes = Router();

routes.use('/feeds', feedsRouter);

export default routes;
