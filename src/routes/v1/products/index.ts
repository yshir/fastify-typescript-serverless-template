import { FastifyPluginCallback } from 'fastify';

import { getProductsHandler, getProductByIdHandler } from './handler';
import { getProductByIdSchema, getProductsSchema } from './schema';

const routes: FastifyPluginCallback = (fastify, _, next) => {
  fastify.get('/', { schema: getProductsSchema }, getProductsHandler);
  fastify.get('/:id', { schema: getProductByIdSchema }, getProductByIdHandler);
  next();
};

export default routes;
