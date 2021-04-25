import { FastifyInstance } from 'fastify';

import { buildFastify, closeFastify } from '@src/app';

let fastify: FastifyInstance | null;

const getFastify = (): FastifyInstance => {
  if (!fastify) {
    throw new Error('fastify is not built');
  }
  return fastify;
};

beforeAll(() => {
  if (!fastify) {
    fastify = buildFastify();
  }
});

afterAll(async () => {
  if (fastify) {
    await closeFastify();
    fastify = null;
  }
});

describe('GET: /v1/products', () => {
  it('should return products', async () => {
    const res = await getFastify().inject({ method: 'GET', url: '/v1/products' });
    expect(res.statusCode).toBe(200);

    const result = JSON.parse(res.payload);
    expect(result).toHaveProperty('count');
    expect(result).toHaveProperty('products');
    expect(result.products[0]).toHaveProperty('id');
    expect(result.products[0]).toHaveProperty('name');
    expect(result.products[0]).toHaveProperty('status');
  });
});

describe('GET: /v1/products/:id', () => {
  describe('exists', () => {
    it('should return product', async () => {
      const res = await getFastify().inject({
        method: 'GET',
        url: '/v1/products/602775d5-1f76-4438-91e8-808815048367',
      });
      expect(res.statusCode).toBe(200);

      const result = JSON.parse(res.payload);
      expect(result).toHaveProperty('product');
      expect(result.product).toHaveProperty('id');
      expect(result.product).toHaveProperty('name');
      expect(result.product).toHaveProperty('status');
    });
  });
});
