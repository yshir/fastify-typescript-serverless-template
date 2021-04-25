import { Entity } from '@src/domains/shared/entity';

import { DomainException } from '../shared/domain-exception';
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

  public isArchived(): boolean {
    return this._props.status.equals(ProductStatus.of('archived'));
  }

  public publish(): void {
    if (this.isArchived()) {
      throw new DomainException('this product was archived. cannot change status');
    }
    this._props.status = ProductStatus.of('published');
  }

  public unpublish(): void {
    if (this.isArchived()) {
      throw new DomainException('this product was archived. cannot change status');
    }
    this._props.status = ProductStatus.of('unpublished');
  }

  public archive(): void {
    this._props.status = ProductStatus.of('archived');
  }
}
