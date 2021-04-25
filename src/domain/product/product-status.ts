import { DomainException } from '@src/domain/shared/domain-exception';
import { ValueObject } from '@src/domain/shared/value-object';

type Value = typeof ProductStatus.STATUSES[number];

export class ProductStatus extends ValueObject<Value> {
  static STATUSES = ['published', 'unpublished', 'archived'] as const;

  private constructor(val: Value) {
    super(val);
  }

  public static of(val: Value): ProductStatus {
    const instance = new ProductStatus(val);
    instance.validate();

    return instance;
  }

  /**
   * @throws {DomainException}
   */
  public validate(): void {
    if (!ProductStatus.STATUSES.includes(this.value)) {
      throw new DomainException(
        `argument must be valid status: got ${this.value}, but statuses are ${ProductStatus.STATUSES.join(', ')}`,
      );
    }
  }
}
