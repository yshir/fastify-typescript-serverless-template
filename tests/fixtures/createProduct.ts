/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from '@src/domains/product/product';
import { ProductId } from '@src/domains/product/product-id';
import { ProductName } from '@src/domains/product/product-name';
import { genUuid } from '@src/lib/utils/gen-uuid';

type Source = {
  id?: string;
  name?: string;
};

export const createProduct = (source?: Source): Product => {
  const id = ProductId.of(source?.id ?? genUuid());
  const props = {
    name: ProductName.of(source?.name ?? 'NAME'),
  };
  return Product.create(id, props);
};
