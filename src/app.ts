import Fastify, { FastifyInstance, FastifyServerOptions } from 'fastify';
import fastifySensible from 'fastify-sensible';

import routes from '@src/routes';

let fastify: FastifyInstance | null;

export const buildFastify = (opts: FastifyServerOptions = {}): FastifyInstance => {
  fastify = Fastify(opts);

  fastify.register(fastifySensible);
  fastify.register(routes, { prefix: '/' });

  return fastify;
};

export const closeFastify = async (): Promise<void> => {
  if (fastify) {
    fastify.close();
    fastify = null;
  }
};
