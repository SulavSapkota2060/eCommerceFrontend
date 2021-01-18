import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerContent row'>
        <div className='col-md-4'>
          <h4>Get to Know Us</h4>
          <div className='items'>
            <a href='#!'>Carrers</a>
            <a href='#!'>Blog</a>
            <a href='#!'>About NepShop</a>
          </div>
        </div>
        <div className='col-md-4'>
          <h4>NepShop Payment Methods</h4>  
          <div className='items'>
            <a href='#!'>Visa</a>
            <a href='#!'>Credit Card</a>
            <a href='#!'>Paypal</a>
            <a href='#!'>E-Sewa</a>
            <a href='#!'>Payment on Delivery</a>
          </div>
        </div>
        <div className='col-md-4'>
          <h4>Let us help you</h4>
          <div className='items'>
            <a href='#!'>NepShop and Covid</a>
            <a href='#!'>Your Account</a>
            <a href='#!'>Your Payment Methods</a>
            <a href='#!'>Your Orders</a>
            <a href='#!'>Nepshop Assistant</a>
            <a href='#!'>Help</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
