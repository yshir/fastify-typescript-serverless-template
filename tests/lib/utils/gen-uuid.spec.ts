import { genUuid } from '@src/lib/utils/gen-uuid';
import { isUuid } from '@src/lib/utils/is-uuid';

describe('genUuid', () => {
  it('should return a uuid v4', () => {
    const result = genUuid();
    expect(result).toBeDefined();
    expect(isUuid(result)).toBe(true);
  });
});
