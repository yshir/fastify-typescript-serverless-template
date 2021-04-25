import fastify, { FastifyInstance } from 'fastify';

import { config } from '@src/config';
import routes from '@src/routes';

export const createApp = (): FastifyInstance => {
  const app = fastify({
    logger: {
      level: config.app.logger.level,
    },
  });

  app.register(routes, { prefix: '/' });

  return app;
};
