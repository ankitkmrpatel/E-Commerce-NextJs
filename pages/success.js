import React, { useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';

import { runFireWork } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireWork();
  }, [setCartItems, setTotalPrice, setTotalQuantities]);

  return (
    <div className="success-wrapper">
      <div className="success">
        <span className="icon">
          <BsBagCheckFill />
        </span>
        <h2>Thanks you for your order.</h2>
        <p className="email-msg">Check your email inbound for the recipt.</p>
        <p className="description">If you have any queries, questions, please email</p>
        <a type="email" href="mailto:order@myweb.com">
          order@myweb.com
        </a>

        <Link href="/">
          <button type="button" className="btn" width="100%">
            Continue Shoppoing
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
