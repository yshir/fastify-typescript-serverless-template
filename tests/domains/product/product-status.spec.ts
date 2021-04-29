import { ProductStatus } from '@src/domain/product/product-status';
import { DomainException } from '@src/lib/exceptions/domain-exception';

describe('ProductStatus', () => {
  describe('construct', () => {
    it('is valid, should create', () => {
      expect(ProductStatus.of('published')).toEqual(expect.any(ProductStatus));
    });

    it('is invalid, should throw', () => {
      expect(() => ProductStatus.of(('invalid' as unknown) as 'published')).toThrow(DomainException);
    });
  });
});
