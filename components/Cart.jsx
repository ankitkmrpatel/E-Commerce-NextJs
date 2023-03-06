/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineRight, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '@/lib/client';

import getStripe from '../lib/getStripe';

const Cart = () => {
  const cartRef = useRef();
  const { cartItems, totalPrice, totalQuantities, setShowCart, toggleCartItemQuantity, onRemoveFromCart } = useStateContext();

  const handleCheckout = async () => {
    console.log('Handle Checkout Called');
    const stripe = await getStripe();
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    console.log('Stripe Response', response);
    if (response.status === 500) {
      toast.error(response.body);
      return;
    }

    // if (response.status === 400) {
    //   toast.error(response.body);
    // }

    const data = await response.json();
    console.log('Stripe redirectToCheckout', data.state, data.id, data);
    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });

    // Promise.all([data])
    //   .then((values) => {
    //     console.log('Stripe Promise Loaded', values);

    //     const errorMsg = values.filter((item) => item.statusCode === 500);

    //     if (errorMsg && errorMsg.length > 0) {
    //       const allMessages = errorMsg.map((x) => x.message);
    //       console.log('Hello Message', allMessages);
    //       toast.error(`${allMessages.join(',')}`);
    //     } else {

    //     }
    //   })
    //   .catch((reason) => {
    //     // "Third Error"
    //     console.log('Stripe Promise Error', reason);
    //   });

    // Promise.allSettled([data]).then((results) => {
    //   // "Resolved : First Success"
    //   // "Resolved : Second Success"
    //   // "Rejected : Third Error"
    //   for (let i = 0; i < results.length; i++) {
    //     if (results[i].status == 'fulfilled') console.log('Resolved : ' + results[i].value);
    //     else if (results[i].status == 'rejected') console.log('Rejected : ' + results[i].reason);
    //   }
    // });
  };

  //console.log('Hello Cart', cartItems);

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => {
            setShowCart(false);
          }}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-item">({totalQuantities})</span>
        </button>
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your Shopping Cart is Empty!</h3>
            {/* <Link href="/"> */}
            <button
              type="button"
              className="btn"
              onClick={() => {
                setShowCart(false);
              }}
            >
              Continue Shopping
            </button>
            {/* </Link> */}
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="product" key={item._id}>
                <img src={urlFor(item.image[0]).url()} alt="" className="cart-product-image" />

                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>

                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span className="minus" onClick={() => toggleCartItemQuantity(item._id, '-')}>
                          <AiOutlineMinus />
                        </span>
                        <span className="num">{item.quantity}</span>
                        <span className="plus" onClick={() => toggleCartItemQuantity(item._id, '+')}>
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>

                    <button type="button" className="remove-item" onClick={() => onRemoveFromCart(item._id)}>
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="cart-bottom">
          <div className="total">
            <h3>Subtotal:</h3>
            <h3>${totalPrice}</h3>
          </div>
          {cartItems.length >= 1 && (
            <div className="btn-container">
              <button type="button" className="btn" onClick={handleCheckout}>
                Pay Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
