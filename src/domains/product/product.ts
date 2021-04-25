import { Entity } from '@src/domains/shared/entity';

import { ProductId } from './product-id';
import { ProductName } from './product-name';
import { ProductStatus } from './product-status';

type Props = {
  name: ProductName;
  status: ProductStatus;
};

export class Product extends Entity<ProductId, Props> {
  private constructor(id: ProductId, props: Props) {
    super(id, props);
  }

  public get id(): ProductId['value'] {
    return this._id.value;
  }

  public get name(): ProductName['value'] {
    return this._props.name.value;
  }

  public get status(): ProductStatus['value'] {
    return this._props.status.value;
  }

  public static create(id: ProductId, props: Props): Product {
    return new Product(id, props);
  }
}
