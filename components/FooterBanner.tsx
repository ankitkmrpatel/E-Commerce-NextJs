/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import { urlFor } from '@/lib/client';

import { IBannerProps } from '../interface';

interface IFooterBanner {
  footerBanner: IBannerProps;
}

const FooterBanner: FunctionComponent<IFooterBanner> = ({ footerBanner }) => {
  const { discount, largeText1, largeText2, saleTime, midText, smallText, desc, product, buttonText, image } = footerBanner;

  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>

        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/procut/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>

        <img src={urlFor(image).url()} className="footer-banner-image" alt="" />
      </div>
    </div>
  );
};

export default FooterBanner;
