import { Router } from 'express';

import CreateMessageService from '../services/CreateMessageService';
import SendMessageFriendToService from '../services/SendMessageFriendToService';

const messagesRouter = Router();

messagesRouter.post('/', async (request, response) => {
  try {
    const { origin, destiny, message } = request.body;

    const createMessage = new CreateMessageService();

    const { newMessage } = await createMessage.execute({
      origin,
      destiny,
      message,
    });

    response.json(newMessage);
  } catch (err) {
    response.status(400).json({ error: err.message });
  }
});

messagesRouter.post('/send', async (request, response) => {
  try {
    const { from, to, message, apiurl } = request.body;

    const sendMessage = new SendMessageFriendToService();

    await sendMessage.execute({ from, to, message, apiurl });

    const createMessage = new CreateMessageService();
    const { newMessage } = await createMessage.execute({
      origin: from,
      destiny: to,
      message,
    });

    return response.json(newMessage);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default messagesRouter;
