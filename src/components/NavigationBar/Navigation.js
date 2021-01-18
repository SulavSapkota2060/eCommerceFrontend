import React from 'react';
import './Navigation.scss';
import {
  AiOutlineShoppingCart,
  AiFillHeart,
  AiOutlineUser,
  //AiOutlineSearch,
} from 'react-icons/ai';

const Navigation = () => {
  return (
    <div className='navigationBar'>
      <div className='navContents'>
        <div className='logo'>
          <h3>NepShops</h3>
          <div className='search'>
            <input type='text' placeholder='Enter something here' />
         
          </div>
        </div>

        <div className='icons'>
          <AiOutlineShoppingCart size='23' />
          &nbsp;
          <AiFillHeart size='23' />
          &nbsp;
          <AiOutlineUser size='23' />
          &nbsp;
          <div className='user'>
            <h6>John Doe</h6>
            <p>My Account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
