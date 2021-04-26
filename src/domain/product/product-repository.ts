import { injectable } from 'inversify';

import { Product } from './product';
import { ProductId } from './product-id';

@injectable()
export abstract class ProductRepository {
  abstract findAll(): Promise<Product[]>;
  abstract findById(id: ProductId): Promise<Product | null>;
  abstract save(product: Product): Promise<void>;
}
