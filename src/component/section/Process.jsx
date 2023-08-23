import { useState } from 'react';
import _ from 'lodash';
import Slider from 'react-slick';
import { process, process_banner } from '../../assets/data/process/process';
import PreviewImages from '../PreviewImages';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 2,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: false,
  className: 'process-banner',
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function SectionProcess() {
  const [isPreview, setIsPreview] = useState(false);
  const [idxImage, setIdxImage] = useState(0);

  const previewImage = (idx) => {
    setIsPreview(true);
    setIdxImage(idx);
  };

  return (
    <div className='card'>
      <div className='font-medium header tracking-[1px]'>
        <p>ขั้นตอนการออกแบบ</p>
        <p>
          และก่อสร้าง กับ <span className='tracking-[1px] sm:text-4xl text-primary inline-block sm:inline'>SHINE HOUSE</span>
        </p>
      </div>
      <div className='flex flex-wrap -mx-2 mt-4 sm:mt-10'>
        {_.map(process, (p, idx) => {
          return (
            <div key={p.desc} className='px-2 py-4 w-1/2 sm:w-1/3'>
              <div className='flex flex-col items-center md:max-w-[60%] lg:max-w-[50%] mx-auto'>
                <div className='w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-medium'>{idx + 1}</div>
                <img src={p.image} alt={p.desc} className='h-[70px] sm:h-20 mx-auto mt-4' />
                <p className='text-center mt-5 whitespace-pre-wrap'>{p.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className='mt-4 mx-4 md:mx-10'>
        <Slider {...settings}>
          {_.map(process_banner, (img, idx) => {
            return (
              <div key={idx} onClick={() => previewImage(idx)} className='cursor-pointer sm:px-2'>
                <img src={img} alt={idx} className='w-full h-full object-cover aspect-[3/4] pointer-events-none rounded-lg' />;
              </div>
            );
          })}
        </Slider>

        {isPreview && <PreviewImages images={process_banner} idxImage={idxImage} isPreview={isPreview} setIsPreview={(val) => setIsPreview(val)} />}
      </div>
    </div>
  );
}
