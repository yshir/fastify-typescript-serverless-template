import { FastifyPluginCallback } from 'fastify';

import healthcheck from './healthcheck';
import v1 from './v1';

const routes: FastifyPluginCallback = async (fastify, _, next) => {
  fastify.register(healthcheck, { prefix: `/healthcheck` });
  fastify.register(v1, { prefix: `/v1` });

  next();
};

export default routes;
