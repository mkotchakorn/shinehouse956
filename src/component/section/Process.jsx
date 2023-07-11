import _ from 'lodash';
import Slider from 'react-slick';
import { process, process_banner } from '../../assets/data/process/process';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  className: 'process-banner',
};

export default function SectionProcess(props) {
  return (
    <div className='card'>
      <div className='font-semibold header tracking-[1px]'>
        <p>ขั้นตอนการออกแบบ</p>
        <p>
          และก่อสร้าง กับ <span className='tracking-[2px] sm:text-4xl text-primary'>SHINE HOUSE</span>
        </p>
      </div>
      <div className='flex flex-wrap -mx-2 mt-5 sm:mt-10'>
        {_.map(process, (p, idx) => {
          return (
            <div key={p.desc} className='px-2 py-4 w-1/2 sm:w-1/3'>
              <div className='flex flex-col items-center md:max-w-[60%] lg:max-w-[50%] mx-auto'>
                <div className='w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xl font-semibold'>{idx + 1}</div>
                <img src={p.image} alt={p.desc} className='h-20 mx-auto mt-3' />
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
              <div key={idx} className='relative pt-[75%]'>
                <img src={img} alt={idx} className='absolute inset-0 w-full h-full --object-cover object-contain pointer-events-none' />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
