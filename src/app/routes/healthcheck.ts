import { FastifyPluginCallback } from 'fastify';

const routes: FastifyPluginCallback = (fastify, _, next) => {
  fastify.get('/', (_, reply) => {
    reply.send({
      timestamp: Date.now(),
    });
  });
  next();
};

export default routes;
