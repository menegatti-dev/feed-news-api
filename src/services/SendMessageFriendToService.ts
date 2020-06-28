import api from './ConnectApiService';

interface Request {
  from: string;
  to: string;
  message: string;
  apiurl: string;
}

class SendMessageToFriendService {
  public async execute({ from, to, message, apiurl }: Request): Promise<void> {
    const messageSending = await api.post('/send-message-friend', {
      from,
      to,
      message,
      apiurl,
    });

    if (messageSending.status !== 200) {
      throw new Error('Unable to send message');
    }
  }
}

export default SendMessageToFriendService;
