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
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  className: 'bg-transparent main-banner',
};

export default function Banner() {
  return (
    <Slider {...settings}>
      {_.map(banners, (b) => {
        return (
          <div key={b.name} className='relative'>
            <img src={b.image} alt={b.name} className='w-full h-full img-banner object-cover aspect-[4/3] md:aspect-[16/9] pointer-events-none' />
          </div>
        );
      })}
    </Slider>
  );
}
