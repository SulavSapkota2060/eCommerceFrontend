import React from 'react';
import './CategoryCard.scss';

const CategoryCard = (props) => {
  return (
    <div className='categoryCard'>
      <div className='image'>
        <img src={props.image} alt={props.categoryName} />
      </div>
      <div className='detail'>
        <h1>{props.categoryName}</h1>
        <button className='primaryButton'>View Collection</button>
      </div>
    </div>
  );
};

export default CategoryCard;
