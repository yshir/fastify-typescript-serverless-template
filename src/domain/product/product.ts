import { Entity } from '@src/lib/entity';
import { DomainException } from '@src/lib/exceptions/domain-exception';

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

  public get id(): ProductId {
    return this._id;
  }

  public get name(): ProductName {
    return this._props.name;
  }

  public get status(): ProductStatus {
    return this._props.status;
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
