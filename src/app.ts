import fastify, { FastifyInstance } from 'fastify';

export const createApp = (): FastifyInstance => {
  const app = fastify();

  app.get('/ping', async (_req, _reply) => {
    return {
      ts: Date.now(),
    };
  });

  return app;
};
