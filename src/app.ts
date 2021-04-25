import fastify, { FastifyInstance } from 'fastify';

import { config } from '@src/config';

export const createApp = (): FastifyInstance => {
  const app = fastify({
    logger: {
      level: config.app.logger.level,
    },
  });

  app.get('/ping', async (_req, _reply) => {
    return {
      ts: Date.now(),
    };
  });

  return app;
};
