import { genUuid, isUuid, UUID_REGEX } from '@src/lib/uuid';

describe('uuid', () => {
  describe('genUuid', () => {
    it('should return a uuid v4', () => {
      const result = genUuid();
      expect(result).toBeDefined();
      expect(isUuid(result)).toBe(true);
    });
  });

  describe('isUuid', () => {
    it('is uuid, then should be true', () => {
      expect(isUuid('3CDE5B2C-31D2-4A12-9DAA-CF857547DD13')).toBe(true);
    });

    it('is number, then should be false', () => {
      expect(isUuid(1)).toEqual(false);
    });

    it('is not uuid string, then should be false', () => {
      expect(isUuid('abcde')).toEqual(false);
    });
  });

  describe('UUID_REGEX', () => {
    it('is valid regex', () => {
      expect(UUID_REGEX.test('40C965F6-DDEB-4319-9E78-0EEB77A2BF63')).toBe(true);
    });
  });
});
