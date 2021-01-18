import React from 'react';
import './FeaturesCard.scss';
import {
  MdMotorcycle,
  MdMonetizationOn,
  MdHeadsetMic,
  MdSecurity,
} from 'react-icons/md';

const FeaturesCard = () => {
  return (
    <div className='featuresCard'>
      <div className='row'>
        <div className='customCard col-md-3'>
          <MdMotorcycle color='#f5365c' size='70' />
          <div className='feature'>
            <h5>Free Shipping</h5>
            <p>Free shipping inside Kathmandu Valley!</p>
          </div>
        </div>
        <div className='customCard col-md-3'>
          <MdMonetizationOn color='#f5365c' size='70' />

          <div className='feature'>
            <h5>Money Guarantee</h5>
            <p>30 days money back.</p>
          </div>
        </div>
        <div className='customCard col-md-3'>
          <MdHeadsetMic color='#f5365c' size='70' />

          <div className='feature'>
            <h5>24/7 Support</h5>
            <p>Friendly 24/7 Support</p>
          </div>
        </div>
        <div className='customCard col-md-3'>
          <MdSecurity color='#f5365c' size='70' />

          <div className='feature'>
            <h5>Security</h5>
            <p>All cards accepted!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
