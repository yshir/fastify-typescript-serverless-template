import { isUuid } from '@src/lib/utils/is-uuid';

describe('isUuid', () => {
  it('is uuid, then should be true', () => {
    expect(isUuid('3CDE5B2C-31D2-4A12-9DAA-CF857547DD13')).toEqual(true);
  });

  it('is number, then should be false', () => {
    expect(isUuid(1)).toEqual(false);
  });

  it('is not uuid string, then should be false', () => {
    expect(isUuid('abcde')).toEqual(false);
  });
});
