export abstract class Entity<T, U> {
  protected readonly _id: T;
  protected props: U;

  protected constructor(_id: T, props: U) {
    this._id = _id;
    this.props = props;
  }

  public equals(other: this): boolean {
    if (other == null) {
      return false;
    }
    return this._id === other._id;
  }
}
