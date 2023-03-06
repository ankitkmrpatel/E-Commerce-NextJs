/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineStar, AiFillStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { useStateContext } from '../../context/StateContext';

import { Product } from '../../components';

export const getServerSideProps = async ({ params: { slug } }) => {
  //console.log('Product GetServerSideProps Called', slug);

  const queryProduct = `*[_type == "product" && slug.current == "${slug}"][0]`;
  const product = await client.fetch(queryProduct);

  //console.log('Product GetServerSideProps Called 2');

  const queryProducts = '*[_type == "product"]';
  const products = await client.fetch(queryProducts);

  //console.log('Product GetServerSideProps Called 3');

  //console.log("Product GetServerSideProps Result", product);
  return {
    props: {
      product,
      products,
    },
  };
};

const ProductDetails = ({ product, products }) => {
  //console.log('Product Details Page Called', product);

  const { image, name, details, price } = product;

  const [index, setIndex] = useState(0);
  const { qty, addQtyItemToCart, removeQtyItemFromCart, addUpdateCartItem, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    addUpdateCartItem(product, qty);
    setShowCart(true);
  };

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image" alt="" />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img key={i} alt="" src={urlFor(item)} className={i === index ? 'small-image selected-image' : 'small-image'} onMouseEnter={() => setIndex(i)} />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={removeQtyItemFromCart}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={addQtyItemToCart}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => {
                addUpdateCartItem(product, qty);
              }}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You May Also Like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((prd) => (
              <Product key={prd._id} product={prd} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
