export abstract class Entity<T, U> {
  protected readonly _id: T;
  protected _props: U;

  protected constructor(_id: T, _props: U) {
    this._id = _id;
    this._props = _props;
  }

  public equals(other: this): boolean {
    if (other == null) {
      return false;
    }
    return this._id === other._id;
  }
}
