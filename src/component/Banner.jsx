import React from 'react';
import Slider from 'react-slick';
import _ from 'lodash';
import { banners } from '../assets/data/banner/banner';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  className: 'bg-black',
};

export default function Banner() {
  return (
    <Slider {...settings}>
      {_.map(banners, (b) => {
        return (
          <div key={b.name} className='relative pt-[42.85%] md:pt-[33.33%]'>
            <img src={b.image} alt={b.name} className='absolute inset-0 w-full h-full object-cover pointer-events-none' />
          </div>
        );
      })}
    </Slider>
  );
}
