import { Container } from 'inversify';
import 'reflect-metadata';

import { ProductService } from '@src/app/services/product-service';
import { ProductRepository } from '@src/domain/product/product-repository';
import { MemoryProductRepository } from '@src/infrastructure/memory/memory-product-repository';

export const container = new Container();

container.bind<ProductRepository>('productRepository').to(MemoryProductRepository).inSingletonScope();
container.bind<ProductService>('productService').to(ProductService).inSingletonScope();
