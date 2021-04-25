import { Product } from '@src/domain/product/product';
import { ProductId } from '@src/domain/product/product-id';
import { ProductName } from '@src/domain/product/product-name';
import { ProductRepository } from '@src/domain/product/product-repository';
import { ProductStatus } from '@src/domain/product/product-status';

export class MemoryProductRepository extends ProductRepository {
  private products: Product[];

  constructor() {
    super();
    this.products = products;
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

const products: Product[] = [
  Product.create(ProductId.of('602775d5-1f76-4438-91e8-808815048367'), {
    name: ProductName.of('name1'),
    status: ProductStatus.of('published'),
  }),
  Product.create(ProductId.of('97a5b83a-0b3a-481c-9430-b9c430dc4668'), {
    name: ProductName.of('name2'),
    status: ProductStatus.of('published'),
  }),
  Product.create(ProductId.of('5894ac07-8d3f-42d2-a8bb-2795c38c751b'), {
    name: ProductName.of('name3'),
    status: ProductStatus.of('published'),
  }),
  Product.create(ProductId.of('0f3a1c5f-25f8-4817-b497-e583606e48de'), {
    name: ProductName.of('name4'),
    status: ProductStatus.of('unpublished'),
  }),
  Product.create(ProductId.of('15a3023f-f525-4873-9ec5-a0ce7d2f6164'), {
    name: ProductName.of('name5'),
    status: ProductStatus.of('archived'),
  }),
];
