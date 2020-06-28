import { Router } from 'express';

import CreateMessageService from '../services/CreateMessageService';

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

export default messagesRouter;
