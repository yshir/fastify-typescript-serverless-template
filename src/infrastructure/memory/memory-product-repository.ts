import { Product } from '@src/domain/product/product';
import { ProductId } from '@src/domain/product/product-id';
import { ProductRepository } from '@src/domain/product/product-repository';

export class MemoryProductRepository extends ProductRepository {
  private products: Product[];

  constructor() {
    super();
    this.products = [];
  }

  public async findAll(): Promise<Product[]> {
    return this.products;
  }

  public async findById(id: ProductId): Promise<Product | null> {
    return this.products.find(p => p.id.equals(id)) ?? null;
  }

  public async save(product: Product): Promise<void> {
    const idx = this.products.findIndex(p => p.equals(product));
    if (idx === -1) {
      this.products.push(product);
    } else {
      this.products[idx] = product;
    }
  }
}
