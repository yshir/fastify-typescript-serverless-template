import { shallowEqual } from 'shallow-equal-object';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export abstract class ValueObject<T extends Props> {
  protected readonly props: T;

  protected constructor(props: T) {
    this.props = Object.freeze(props);
  }

  public equals(vo?: ValueObject<T>): boolean {
    if (vo == null) {
      return false;
    }
    return shallowEqual(this.props, vo.props);
  }
}
