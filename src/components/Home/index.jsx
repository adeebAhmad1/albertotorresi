import React from 'react';
import Genders from './Genders';
import Products from './Products';
import ShoeTypes from './ShoeTypes';
import Carousel from './Carousel';
import LifeStyle from './LifeStyle';
import Celebrities from './Celebrities';

const Home = () => {
  return (
    <div>
      <Genders />
      <Products active="Men" />
      <ShoeTypes />
      <Carousel />
      <LifeStyle />
      <Products active="Women" />
      <ShoeTypes />
      <Celebrities/>
    </div>
  );
};

export default Home;