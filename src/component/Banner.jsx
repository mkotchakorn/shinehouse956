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
  fade: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  className: 'bg-transparent main-banner',
};

export default function Banner() {
  return (
    <Slider {...settings}>
      {_.map(banners, (b, idx) => {
        return (
          <div key={idx} className='relative'>
            <img src={b} alt={idx} className='w-full h-full img-banner object-cover aspect-[16/9] pointer-events-none' />
          </div>
        );
      })}
    </Slider>
  );
}
