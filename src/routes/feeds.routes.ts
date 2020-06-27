import { Router } from 'express';
import ListFeedService from '../services/ListFeedService';

const feedsRouter = Router();

feedsRouter.get('/', async (request, response) => {
  try {
    const listFeed = new ListFeedService();
    const { feeds } = await listFeed.execute();

    return response.json(feeds);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default feedsRouter;
