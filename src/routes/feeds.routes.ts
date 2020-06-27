import { Router } from 'express';
import ListFeedService from '../services/ListFeedService';

const feedsRouter = Router();

feedsRouter.get('/', async (request, response) => {
  const listFeed = new ListFeedService();
  const { feeds } = await listFeed.execute();

  return response.json(feeds);
});

export default feedsRouter;
