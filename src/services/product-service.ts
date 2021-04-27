import { inject, injectable } from 'inversify';

import { Product } from '@src/domain/product/product';
import { ProductId } from '@src/domain/product/product-id';
import { ProductRepository } from '@src/domain/product/product-repository';

@injectable()
export class ProductService {
  private productRepository: ProductRepository;

  constructor(@inject('productRepository') productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  async findById(id: ProductId): Promise<Product | null> {
    return this.productRepository.findById(id);
  }
}
