import { Container } from 'inversify';

import { ProductRepository } from '@src/domain/product/product-repository';
import { MemoryProductRepository } from '@src/infrastructure/memory/memory-product-repository';

export const container = new Container();

container.bind<ProductRepository>('productRepository').to(MemoryProductRepository).inSingletonScope();
