import { DomainException } from '@src/lib/exceptions/domain-exception';
import { genUuid, isUuid } from '@src/lib/uuid';
import { ValueObject } from '@src/lib/value-object';

export class ProductId extends ValueObject<string> {
  private constructor(val: string) {
    super(val);
  }

  public static gen(): ProductId {
    return ProductId.of(genUuid());
  }

  public static of(val: string): ProductId {
    const instance = new ProductId(val);
    instance.validate();

    return instance;
  }

  /**
   * @throws {DomainException}
   */
  private validate(): void {
    if (!isUuid(this.value)) {
      throw new DomainException(`argument is not uuid: ${this.value}`);
    }
  }
}
