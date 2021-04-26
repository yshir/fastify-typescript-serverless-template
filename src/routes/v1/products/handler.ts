import { FastifyReply, FastifyRequest } from 'fastify';
import { FromSchema } from 'json-schema-to-ts';

import { ProductId } from '@src/domain/product/product-id';
import { ProductRepository } from '@src/domain/product/product-repository';
import { container } from '@src/provider';

import { getProductByIdSchema, getProductsSchema } from './schema';

const repository = container.get<ProductRepository>('productRepository');

export const getProductsHandler = async (_req: FastifyRequest, reply: FastifyReply): Promise<void> => {
  const products = await repository.findAll();

  const response: FromSchema<typeof getProductsSchema.response['200']> = {
    count: products.length,
    products: products.map(p => ({
      id: p.id.value,
      name: p.name.value,
      status: p.status.value,
    })),
  };
  reply.send(response);
};

export const getProductByIdHandler = async (
  req: FastifyRequest<{ Params: FromSchema<typeof getProductByIdSchema.params> }>,
  reply: FastifyReply,
): Promise<void> => {
  const id = ProductId.of(req.params.id);
  const product = await repository.findById(id);
  if (!product) {
    return reply.notFound(`product not found: (id: ${id})`);
  }

  const response: FromSchema<typeof getProductByIdSchema.response['200']> = {
    product: {
      id: product.id.value,
      name: product.name.value,
      status: product.status.value,
    },
  };
  reply.send(response);
};
