import React, { useState } from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import Image1 from '../../assets/images/Categories/hoodies.jpg';
import Image2 from '../../assets/images/Categories/interior.jpg';
import Image3 from '../../assets/images/Categories/jeans.jpg';
import Image4 from '../../assets/images/Categories/laptop.jpg';
import Image5 from '../../assets/images/Categories/shorts.jpg';
import Image6 from '../../assets/images/Categories/accessories.jpg';


import './ShopCategory.scss'

const ShopCategory = () => {
  const [categories, changeCategories] = useState([
    {
      categoryName: 'Hoodies',
      image: Image1,
    },
    {
      categoryName: 'Interior',
      image: Image2,
    },
    {
      categoryName: 'Jeans',
      image: Image3,
    },
    {
      categoryName: 'Laptop',
      image: Image4,
    },
    {
      categoryName: 'Shorts',
      image: Image5,
    },
    {
      categoryName: 'Accessories',
      image: Image6,
    },
  ]);
  return (
    <div className='shopCategory'>
      <h1>Shop by Category</h1>
      <div className='row'>
        {categories.map((category) => {
          return (
            <div className='col-md-4'>
              <CategoryCard
                categoryName={category.categoryName}
                image={category.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
