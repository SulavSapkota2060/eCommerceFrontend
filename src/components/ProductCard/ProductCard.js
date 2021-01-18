import React from 'react';
import './ProductCard.scss';
import { AiOutlineShoppingCart, AiFillInfoCircle } from 'react-icons/ai';
import { IoMdPricetags, IoStar, IoStarHalf } from 'react-icons/all';

const ProductCard = (props) => {
  return (
    <div className='productCard'>
      <div className='image'>
        <img src={props.data.productImage} alt='' />
      </div>
      <div className='details'>
        <div className='company'>
          <p>{props.data.productCompany}</p>
        </div>
        <div className='name'>
          <h5>{props.data.productName.split("").splice(0,40)}...</h5>
        </div>

        <span className='price'>
          <IoMdPricetags /> Rs. {props.data.productPrice}
        </span>
        <div className='rating'>
          <IoStar color='ffd600' size='20 ' />
          <IoStar color='ffd600' size='20 ' />
          <IoStar color='ffd600' size='20 ' />
          <IoStarHalf color='ffd600' size='20' />
        </div>
        <div className='other'>
          <button className='primaryButton'>
            <AiOutlineShoppingCart size='25' /> Add to Cart
          </button>
          <button className='primaryButton'>
            <AiFillInfoCircle size='25' /> View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
