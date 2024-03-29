import { DomainException } from '@src/lib/exceptions/domain-exception';
import { ValueObject } from '@src/lib/value-object';

type Value = string;

export class ProductName extends ValueObject<Value> {
  static readonly MAX_LENGTH = 255;

  private constructor(val: Value) {
    super(val);
  }

  public static of(val: Value): ProductName {
    const instance = new ProductName(val);
    instance.validate();

    return instance;
  }

  /**
   * @throws {DomainException}
   */
  public validate(): void {
    if (!this.value.length) {
      throw new DomainException(`argument must be not empty: ${this.value}`);
    }
    if (this.value.length > ProductName.MAX_LENGTH) {
      throw new DomainException(
        `argument must be less than or equal to ${ProductName.MAX_LENGTH} characters: ${this.value}`,
      );
    }
  }
}
