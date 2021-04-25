import Fastify, { FastifyInstance, FastifyServerOptions } from 'fastify';

import { config } from '@src/config';
import routes from '@src/routes';

export const buildFastify = (opts: FastifyServerOptions = {}): FastifyInstance => {
  const fastify = Fastify({
    ...opts,
    logger: {
      level: config.app.logger.level,
    },
  });

  fastify.register(routes, { prefix: '/' });

  return fastify;
};
