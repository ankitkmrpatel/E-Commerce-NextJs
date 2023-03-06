import React from 'react';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>&copy; 2023 MyWeb-E-Commerce All Right Reserverd</p>
      <p className="icons">
        <AiFillFacebook />
        <AiFillInstagram />
      </p>
    </div>
  );
};

export default Footer;
