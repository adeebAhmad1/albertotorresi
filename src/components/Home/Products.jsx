import React from 'react';
import Slider from 'react-slick';
import Card from '../utils/Card';

const Products = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: window.innerWidth < 1000 ? window.innerWidth > 700 ? 3 : window.innerWidth > 500 ? 2 :1 : 4,
    slidesToScroll: 1,
    // arrows: false,
    autoplaySpeed: 110000
  };
  return (
    <section className="ProductListWrapper">
      <Slider className="slider" {...settings}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    </section>
  );
};

export default Products;