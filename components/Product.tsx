/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import { urlFor } from '@/lib/client';

import { IProductInfoProps } from '../interface';

interface IProductProps {
  product: IProductInfoProps;
}

// const Product = ({ product: { image, name, slug, price } }) => {
const Product: FunctionComponent<IProductProps> = ({ product }) => {
  return (
    <div>
      <Link href={`/product/${product.slug.current}`}>
        <div className="product-card">
          {product.image && <img alt="" src={urlFor(product.image[0]).url()} width={250} height={250} className="product-image" />}
          <p className="product-name">{product.name}</p>
          <p className="product-price">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
