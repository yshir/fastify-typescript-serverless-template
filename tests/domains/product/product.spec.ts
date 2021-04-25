import { Product } from '@src/domains/product/product';
import { ProductId } from '@src/domains/product/product-id';
import { ProductName } from '@src/domains/product/product-name';

import { createProduct } from '@tests/fixtures/createProduct';

describe('Product', () => {
  describe('create', () => {
    it('is valid, should create', () => {
      const result = Product.create(ProductId.gen(), {
        name: ProductName.of('name'),
      });
      expect(result).toEqual(expect.any(Product));
    });
  });

  describe('id', () => {
    it('should return id', () => {
      const product = createProduct({ id: '13BBFA5F-C35D-4DB5-B464-1A1D6E36481B' });
      expect(product.id).toEqual('13BBFA5F-C35D-4DB5-B464-1A1D6E36481B');
    });
  });

  describe('name', () => {
    it('should return name', () => {
      const product = createProduct({ name: 'name' });
      expect(product.name).toEqual('name');
    });
  });
});
