import Fastify, { FastifyInstance, FastifyServerOptions } from 'fastify';
import fastifyCors from 'fastify-cors';
import fastifyFavicon from 'fastify-favicon';
import fastifySensible from 'fastify-sensible';
import fastifySwagger from 'fastify-swagger';

import { config } from '@src/config';
// import { swaggerPlugin } from '@src/plugins/swagger-plugin';
import routes from '@src/routes';

let fastify: FastifyInstance | null;

export const buildFastify = (opts: FastifyServerOptions = {}): FastifyInstance => {
  fastify = Fastify(opts);

  fastify.register(fastifySensible);
  fastify.register(fastifyCors, { origin: config.app.cors, credentials: true });
  fastify.register(fastifySwagger, {
    routePrefix: '/docs',
    swagger: {
      info: {
        title: 'Test swagger',
        description: 'testing the fastify swagger api',
        version: '0.1.0',
      },
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
    exposeRoute: true,
  });
  fastify.register(fastifyFavicon);
  fastify.register(routes);

  return fastify;
};

export const closeFastify = async (): Promise<void> => {
  if (fastify) {
    fastify.close();
    fastify = null;
  }
};
