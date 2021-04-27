import Fastify, { FastifyInstance, FastifyServerOptions } from 'fastify';
import fastifyCors from 'fastify-cors';
import fastifySensible from 'fastify-sensible';

import { config } from '@src/config';
import routes from '@src/routes';

let fastify: FastifyInstance | null;

export const buildFastify = (opts: FastifyServerOptions = {}): FastifyInstance => {
  fastify = Fastify(opts);

  fastify.register(fastifySensible);
  fastify.register(fastifyCors, { origin: config.app.cors, credentials: true });
  fastify.register(routes);

  return fastify;
};

export const closeFastify = async (): Promise<void> => {
  if (fastify) {
    fastify.close();
    fastify = null;
  }
};
