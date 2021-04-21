import { createServer } from 'miragejs';
import Env from 'react-native-config';

export const makeServer = () => {
  const server = createServer({
    routes() {
      this.namespace = 'api';

      this.urlPrefix = Env.BASE_URL;

      this.get('/reminders', () => [
        { id: 1, text: 'Walk the dog' },
        { id: 2, text: 'Take out the trash' },
        { id: 3, text: 'Work out' },
      ]);
    },
  });

  return server;
};
