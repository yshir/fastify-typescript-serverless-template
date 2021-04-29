import { FastifyReply, FastifyRequest } from 'fastify';
import { FromSchema } from 'json-schema-to-ts';

import { container } from '@src/app/provider';
import { ProductService } from '@src/app/services/product-service';
import { ProductId } from '@src/domain/product/product-id';

import { getProductByIdSchema, getProductsSchema } from './schema';

export const getProductsHandler = async (_req: FastifyRequest, reply: FastifyReply): Promise<void> => {
  const service = container.get<ProductService>('productService');
  const products = await service.findAll();

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
  const service = container.get<ProductService>('productService');

  const id = ProductId.of(req.params.id);
  const product = await service.findById(id);
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
