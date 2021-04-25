/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from '@src/domains/product/product';
import { ProductId } from '@src/domains/product/product-id';
import { ProductName } from '@src/domains/product/product-name';
import { ProductStatus } from '@src/domains/product/product-status';
import { genUuid } from '@src/lib/utils/gen-uuid';

type Source = {
  id?: ProductId['value'];
  name?: ProductName['value'];
  status?: ProductStatus['value'];
};

export const createProduct = (source?: Source): Product => {
  const id = ProductId.of(source?.id ?? genUuid());
  const props = {
    name: ProductName.of(source?.name ?? 'NAME'),
    status: ProductStatus.of(source?.status ?? 'published'),
  };
  return Product.create(id, props);
};
