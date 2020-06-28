import { getRepository } from 'typeorm';
import Message from '../models/Message';

interface Request {
  origin: string;
  destiny: string;
  message: string;
}

interface Response {
  newMessage: Message;
}

class CreateMessageService {
  public async execute({
    origin,
    destiny,
    message,
  }: Request): Promise<Response> {
    const messageRepository = getRepository(Message);

    const newMessage = messageRepository.create({
      origin,
      destiny,
      message,
    });

    await messageRepository.save(newMessage);

    return {
      newMessage,
    };
  }
}

export default CreateMessageService;
