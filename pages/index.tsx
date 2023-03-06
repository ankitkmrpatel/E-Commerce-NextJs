import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { Product, HeroBanner, FooterBanner } from '../components';

import { client } from '../lib/client';

import type { IHomePageProps } from '../interface';

const Home: FunctionComponent<IHomePageProps> = ({ products, banners }) => {
  //const Home = ({ products, banners }) => {
  //console.log("Sanity Log Data", products, banners);

  return (
    <>
      <HeroBanner heroBanner={banners.length && banners[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of Many Variations</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={banners && banners[0]} />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  //console.log('HOme GetServerSideProps Called');

  const queryProduct = '*[_type == "product"]';
  const products = await client.fetch(queryProduct);

  //console.log('HOme GetServerSideProps Called 2');

  const queryBanner = '*[_type == "banner"]';
  const banners = await client.fetch(queryBanner);

  //console.log('HOme GetServerSideProps Called 3');

  //console.log("Home GetServerSideProps Result", products, banners);
  return {
    props: {
      products,
      banners,
    },
  };
};
