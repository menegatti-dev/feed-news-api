import { uuid } from 'uuidv4';
import Feed from '../models/Feed';
import api from './ConnectApiService';

interface Response {
  feeds: Feed[];
}

class ListFeedService {
  public async execute(): Promise<Response> {
    const feeds = await api.get('feednews');

    const feedsWithID: Feed[] = feeds.data.map((feed: Feed) => {
      if (!feed.id || feed.id === '') {
        const newFeed = {
          ...feed,
          id: uuid(),
        };
        return newFeed;
      }
      return feed;
    });

    return { feeds: feedsWithID };
  }
}

export default ListFeedService;
