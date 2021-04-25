import { ValueObject } from './value-object';

export abstract class PrimitiveValueObject<T> extends ValueObject<{ value: T }> {
  protected constructor(value: T) {
    super({ value });
  }

  public get value(): T {
    return this.props.value;
  }

  public toJSON(): T {
    return this.value;
  }
}
