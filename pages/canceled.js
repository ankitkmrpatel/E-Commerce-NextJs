import React, { useEffect } from 'react';
import Link from 'next/link';
import { BsBagXFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';

import { runFireWork } from '../lib/utils';

const Canceled = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireWork();
  }, [setCartItems, setTotalPrice, setTotalQuantities]);

  return (
    <div className="cancel-wrapper">
      <div className="cancel">
        <span className="icon">
          <BsBagXFill />
        </span>
        <h2>You order could not process at this time.</h2>
        <p className="email-msg">Kindly try again later.</p>
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

export default Canceled;
