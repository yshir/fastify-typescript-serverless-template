import { ProductName } from '@src/domains/product/product-name';
import { DomainException } from '@src/domains/shared/domain-exception';

describe('ProductName', () => {
  describe('of', () => {
    it('is valid argument, should create', () => {
      expect(ProductName.of('PRODUCT_NAME')).toEqual(expect.any(ProductName));
    });

    it('is empty string, should throw', () => {
      expect(() => ProductName.of('')).toThrow(DomainException);
    });

    it('is over max length, should throw', () => {
      expect(() => ProductName.of(''.padEnd(ProductName.MAX_LENGTH + 1, 'x'))).toThrow(DomainException);
    });
  });
});
