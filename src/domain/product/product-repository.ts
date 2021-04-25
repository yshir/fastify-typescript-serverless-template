import { Product } from './product';
import { ProductId } from './product-id';

export abstract class ProductRepository {
  abstract findAll(): Promise<Product[]>;
  abstract findById(id: ProductId): Promise<Product | null>;
  abstract save(product: Product): Promise<void>;
}
