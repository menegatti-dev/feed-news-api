import { Router } from 'express';

import ListFeedService from '../services/ListFeedService';
import CreateFeedService from '../services/CreateFeedService';

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

feedsRouter.post('/', async (request, response) => {
  try {
    const { title, description, author } = request.body;
    const createFeed = new CreateFeedService();
    const { feed } = await createFeed.execute({
      title,
      description,
      author,
    });

    return response.json(feed);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default feedsRouter;
