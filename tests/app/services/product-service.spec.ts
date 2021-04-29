import { Container } from 'inversify';
import 'reflect-metadata';

import { ProductService } from '@src/app/services/product-service';
import { ProductId } from '@src/domain/product/product-id';
import { ProductRepository } from '@src/domain/product/product-repository';

import { createProduct } from '@tests/factories/createProduct';

describe('ProductService', () => {
  let container: Container;

  beforeEach(() => {
    container = new Container();
  });

  afterEach(() => {
    container.unbindAll();
  });

  describe('findAll', () => {
    it('should return products', async () => {
      const product = createProduct();
      const mockRepository = {
        findAll: jest.fn().mockResolvedValue([product]),
      };

      container.bind<Partial<ProductRepository>>('productRepository').toConstantValue(mockRepository);
      container.bind<ProductService>('productService').to(ProductService);
      const service = container.get<ProductService>('productService');

      const result = await service.findAll();

      expect(mockRepository.findAll).toHaveBeenCalledTimes(1);
      expect(result.length).toEqual(1);
      expect(result[0]?.id.equals(product.id)).toEqual(true);
    });
  });

  describe('findById', () => {
    describe('exists', () => {
      it('should return products', async () => {
        const product = createProduct();
        const mockRepository = {
          findById: jest.fn().mockResolvedValue(product),
        };

        container.bind<Partial<ProductRepository>>('productRepository').toConstantValue(mockRepository);
        container.bind<ProductService>('productService').to(ProductService);
        const service = container.get<ProductService>('productService');

        const result = await service.findById(product.id);

        expect(mockRepository.findById).toHaveBeenCalledTimes(1);
        expect(result?.id.equals(product.id)).toEqual(true);
      });
    });

    describe('not exists', () => {
      it('should return null', async () => {
        const mockRepository = {
          findById: jest.fn().mockResolvedValue(null),
        };

        container.bind<Partial<ProductRepository>>('productRepository').toConstantValue(mockRepository);
        container.bind<ProductService>('productService').to(ProductService);
        const service = container.get<ProductService>('productService');

        const result = await service.findById(ProductId.of('142DB019-46AD-4B49-9457-28FEB18ABA85'));

        expect(mockRepository.findById).toHaveBeenCalledTimes(1);
        expect(result).toEqual(null);
      });
    });
  });
});
