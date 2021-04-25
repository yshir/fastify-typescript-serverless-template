import { Product } from '@src/domains/product/product';
import { ProductId } from '@src/domains/product/product-id';
import { ProductName } from '@src/domains/product/product-name';
import { ProductStatus } from '@src/domains/product/product-status';
import { DomainException } from '@src/domains/shared/domain-exception';

import { createProduct } from '@tests/fixtures/createProduct';

describe('Product', () => {
  describe('create', () => {
    it('is valid, should create', () => {
      const result = Product.create(ProductId.gen(), {
        name: ProductName.of('name'),
        status: ProductStatus.of('published'),
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

  describe('status', () => {
    it('should return status', () => {
      const product = createProduct({ status: 'unpublished' });
      expect(product.status).toEqual('unpublished');
    });
  });

  describe('publish', () => {
    it('should change status to published', () => {
      const product = createProduct({ status: 'unpublished' });
      product.publish();
      expect(product.status).toEqual('published');
    });

    it('cannot change status if this product archived', () => {
      const product = createProduct({ status: 'archived' });
      expect(() => {
        product.publish();
      }).toThrow(DomainException);
    });
  });

  describe('publish', () => {
    describe('not archived product', () => {
      it('should change status to published', () => {
        const product = createProduct({ status: 'unpublished' });
        product.publish();
        expect(product.status).toEqual('published');
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
        expect(product.status).toEqual('unpublished');
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
      expect(product.status).toEqual('archived');
    });
  });
});
