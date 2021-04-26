import { shallowEqual } from 'shallow-equal-object';

export abstract class ValueObject<T> {
  protected readonly _value: T;

  protected constructor(_value: T) {
    this._value = Object.freeze(_value);
  }

  get value(): T {
    return this._value;
  }

  public equals(vo?: ValueObject<T>): boolean {
    if (vo == null) {
      return false;
    }
    return shallowEqual(this._value, vo._value);
  }
}
