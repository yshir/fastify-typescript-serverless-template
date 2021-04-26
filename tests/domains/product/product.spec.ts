import { Product } from '@src/domain/product/product';
import { ProductId } from '@src/domain/product/product-id';
import { ProductName } from '@src/domain/product/product-name';
import { ProductStatus } from '@src/domain/product/product-status';
import { DomainException } from '@src/exceptions/domain-exception';

import { createProduct } from '@tests/fixtures/createProduct';

describe('Product', () => {
  describe('create', () => {
    it('is valid, should create', () => {
      const id = ProductId.gen();
      const result = Product.create(id, {
        name: ProductName.of('name'),
        status: ProductStatus.of('published'),
      });
      expect(result).toEqual(expect.any(Product));
      expect(result.id.equals(id)).toBe(true);
    });
  });

  describe('id', () => {
    it('should return id', () => {
      const product = createProduct({ id: '13BBFA5F-C35D-4DB5-B464-1A1D6E36481B' });
      expect(product.id.equals(ProductId.of('13BBFA5F-C35D-4DB5-B464-1A1D6E36481B'))).toBe(true);
    });
  });

  describe('name', () => {
    it('should return name', () => {
      const product = createProduct({ name: 'name' });
      expect(product.name.equals(ProductName.of('name'))).toBe(true);
    });
  });

  describe('status', () => {
    it('should return status', () => {
      const product = createProduct({ status: 'unpublished' });
      expect(product.status.equals(ProductStatus.of('unpublished'))).toBe(true);
    });
  });

  describe('publish', () => {
    describe('not archived product', () => {
      it('should change status to published', () => {
        const product = createProduct({ status: 'unpublished' });
        product.publish();
        expect(product.status.equals(ProductStatus.of('published'))).toBe(true);
      });
    });

    describe('archived product', () => {
      it('should throw because cannot change status of archived product', () => {
        const product = createProduct({ status: 'archived' });
        expect(() => {
          product.publish();
        }).toThrow(DomainException);
      });
    });
  });

  describe('unpublish', () => {
    describe('not archived product', () => {
      it('should change status to unpublished', () => {
        const product = createProduct({ status: 'published' });
        product.unpublish();
        expect(product.status.equals(ProductStatus.of('unpublished'))).toBe(true);
      });
    });

    describe('archived product', () => {
      it('should throw because cannot change status of archived product', () => {
        const product = createProduct({ status: 'archived' });
        expect(() => {
          product.unpublish();
        }).toThrow(DomainException);
      });
    });
  });

  describe('archive', () => {
    it('should change status to archived', () => {
      const product = createProduct({ status: 'published' });
      product.archive();
      expect(product.status.equals(ProductStatus.of('archived'))).toBe(true);
    });
  });
});
