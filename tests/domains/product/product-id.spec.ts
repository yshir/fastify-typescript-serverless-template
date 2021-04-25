import { ProductId } from '@src/domains/product/product-id';
import { DomainException } from '@src/domains/shared/domain-exception';

describe('ProductId', () => {
  describe('of', () => {
    it('is uuid v4, should create a new instance', () => {
      expect(ProductId.of('117CD2D0-81C6-4E9D-BC36-C156A957A3C2')).toEqual(expect.any(ProductId));
    });

    it('is not uuid v4, should throw', () => {
      expect(() => ProductId.of('1')).toThrow(DomainException);
    });
  });

  describe('gen', () => {
    it('should create a new instance', () => {
      expect(ProductId.gen()).toEqual(expect.any(ProductId));
    });
  });
});
