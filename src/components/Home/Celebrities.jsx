import React from 'react';
import Slider from 'react-slick';
import CelebReviews from '../utils/CelebReviews';
import BtnLink from '../utils/BtnLink';

const Celebrities = () => {
  return (
    <section className="celebrities">
      <Slider className="carousel_slider">
        <CelebReviews/>
        <CelebReviews/>
        <CelebReviews/>
        <CelebReviews/>
      </Slider>
      <div className="button_wrapper" style={{textAlign: `center`}}>
        <BtnLink color="black" location="/" name="View All" />
      </div>
    </section>
  );
};

export default Celebrities;