import React, { useState } from 'react';
import Image1 from '../../assets/images/SlideShow/canonCamera.jpg';
import Image2 from '../../assets/images/SlideShow/vr.jpeg';
import ProductCard from '../ProductCard/ProductCard';
import './TopPicks.scss';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/all';

const TopPicks = () => {
  const [products, modifyProducts] = useState([
    {
      productId: '1gydyeg',
      productName:
        "Daily Ritual Women's Sandwashed Modal Blend Relaxed-Fit Jogger Pant",
      productCompany: 'Canon',
      productDescription:
        'Culpa veniam elit consequat pariatur consectetur commodo laborum duis anim ex cillum.In ad tempor ut quis in pariatur commodo officia dolore ex consequat sint.',
      productPrice: 2000,
      productImage: Image1,
    },
    {
      productId: 'wddw1gydyeg',
      productName: 'VR BOX',
      productCompany: 'Sony',
      productDescription:
        'Culpa veniam elit consequat pariatur consectetur commodo laborum duis anim ex cillum.In ad tempor ut quis in pariatur commodo officia dolore ex consequat sint.',
      productPrice: 100,
      productImage: Image2,
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
      productName: 'VR BOX',
      productCompany: 'Sony',
      productDescription:
        'Culpa veniam elit consequat pariatur consectetur commodo laborum duis anim ex cillum.In ad tempor ut quis in pariatur commodo officia dolore ex consequat sint.',
      productPrice: 100,
      productImage: Image2,
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
  const scrollRight = () => {
    document.querySelector('.products').scrollBy(200, 0);
  };
  const scrollLeft = () => {
    document.querySelector('.products').scrollBy(-200, 0);
  };
  return (
    <div className='topPicks'>
      <h1>Top Picks</h1>
      <span onClick={scrollRight} className='scrollBtn scrollRight'>
        <GrLinkNext color='gray' size='30' />
      </span>
      <span onClick={scrollLeft} className='scrollBtn scrollLeft'>
        <GrLinkPrevious size='30' />
      </span>
      <section className='products'>
        {products.map((data) => (
          <ProductCard data={data} />
        ))}
        {products.map((data) => (
          <ProductCard data={data} />
        ))}
      </section>
    </div>
  );
};

export default TopPicks;
