import React, { useState, useEffect } from 'react';
import './SlideShow.scss';
import Image1 from '../../assets/images/SlideShow/canonCamera.jpg';
import Image2 from '../../assets/images/SlideShow/vr.jpeg';
import Image3 from '../../assets/images/SlideShow/canonCamera.jpg';

import 'bootstrap';

const SlideShow = () => {
  const [products, modifyProducts] = useState([
    {
      productId: '1gydyeg',
      productName: 'DSLR Camera',
      productCompany: 'Canon',
      productDescription:
        'Culpa veniam elit consequat pariatur consectetur commodo laborum duis anim ex cillum.In ad tempor ut quis in pariatur commodo officia dolore ex consequat sint.',
      productPrice: 2000,
      productImage: Image1,
    },
    {
      productId: 'wddw1gydyeg',
      productName: 'VR BOX for fun',
      productCompany: 'Sony',
      productDescription:
        'Culpa veniam elit consequat pariatur consectetur commodo laborum duis anim ex cillum.In ad tempor ut quis in pariatur commodo officia dolore ex consequat sint.',
      productPrice: 100,
      productImage: Image1,
    },
    {
      productId: '1gydwdwdyeg',
      productName: 'Ultra HD, 4K Smart TV',
      productCompany: 'Samsung',
      productDescription:
        'Culpa veniam elit consequat pariatur consectetur commodo laborum duis anim ex cillum.In ad tempor ut quis in pariatur commodo officia dolore ex consequat sint.',
      productPrice: 1000,
      productImage: Image1,
    },
  ]);
  const [slideIndex, changeSlideIndex] = useState(0);

  useEffect(() => {
    const totalNo = products.length - 1;
    console.log(totalNo);
    setTimeout(() => {
      if (slideIndex < totalNo) {
        changeSlideIndex(slideIndex + 1);
      } else {
        changeSlideIndex(0);
      }
    }, 2000);
  }, [slideIndex, products]);

  return (
    <div className='slideShow'>
      <div className='details'>
        <p className='company'>{products[slideIndex].productCompany}</p>
        <h1 className='productName'>{products[slideIndex].productName}</h1>
        <p className='productDescription'>
          {products[slideIndex].productDescription}
        </p>
        <button className='primaryButton'>Shop Now</button> &nbsp;
        <button className='secondaryButton'>Learn More</button>
      </div>
      <div className='image'>
        <img src={products[slideIndex].productImage} alt='' />
      </div>
    </div>
  );
};

export default SlideShow;
