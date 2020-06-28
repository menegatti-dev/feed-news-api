import { Router } from 'express';

import feedsRouter from './feeds.routes';
import messagesRouter from './messages.routes';

const routes = Router();

routes.use('/feeds', feedsRouter);
routes.use('/messages', messagesRouter);

export default routes;
