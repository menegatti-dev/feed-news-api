import { uuid } from 'uuidv4';
import { parseJSON } from 'date-fns';
import Feed from '../models/Feed';
import api from './ConnectApiService';

interface Request {
  title: string;

  description: string;

  author: string;
}

interface Response {
  feed: Feed;
}

class CreateFeedService {
  public async execute({
    title,
    description,
    author,
  }: Request): Promise<Response> {
    const feed: Feed = {
      id: uuid(),
      title,
      postdate: `${parseJSON(Date.now())}`,
      description,
      author,
    };
    const response = await api.post('/send-feed', feed);

    if (response.status !== 200) {
      throw new Error('Error when creating Feed');
    }

    return { feed };
  }
}

export default CreateFeedService;
