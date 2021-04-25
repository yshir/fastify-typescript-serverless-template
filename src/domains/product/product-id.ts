import { DomainException } from '@src/domains/shared/domain-exception';
import { PrimitiveValueObject } from '@src/domains/shared/primitive-value-object';
import { genUuid } from '@src/lib/utils/gen-uuid';
import { isUuid } from '@src/lib/utils/is-uuid';

export class ProductId extends PrimitiveValueObject<string> {
  private constructor(val: string) {
    super(val);
  }

  public static gen(): ProductId {
    return ProductId.of(genUuid());
  }

  public static of(val: string): ProductId {
    if (!isUuid(val)) {
      throw new DomainException(`argument is not uuid: ${val}`);
    }
    return new ProductId(val);
  }
}
