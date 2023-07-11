import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import _ from 'lodash';
import AppLayout from '../../component/AppLayout';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../component/common/Button';
import { routeName } from '../../routes/routes';
import { interior, exterior } from '../../assets/data/portfolio/portfolio';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  swipeToSlide: true,
  className: 'center',
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const title_class = 'font-medium sm:text-base';
const body_class = 'sm:text-base pl-3';

export default function PortfolioId() {
  const navigate = useNavigate();
  const location = useLocation();
  const param = location.pathname.substring(1).split('/');
  const paramType = param[1];
  const paramIndex = param[2];
  const portfolio = paramType === 'interior' ? interior[paramIndex - 1] : exterior[paramIndex - 1];

  const [isPreview, setIsPreview] = useState(false);
  const [preview, setPreview] = useState(null);

  const previewImage = (idx) => {
    setIsPreview(true);
    setPreview(portfolio.images[idx]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppLayout>
      {portfolio && (
        <div className='relative pt-[42.85%]'>
          <img src={portfolio.banner} alt={portfolio.desc.project} className='absolute inset-0 w-full h-full object-cover pointer-events-none' />
        </div>
      )}
      <div className='container'>
        <div className='pt-0'>
          <div className='card'>
            {(portfolio && (
              <>
                <div className='flex flex-col sm:flex-row'>
                  {portfolio.desc.location && (
                    <div className='w-full max-w-[250px] mx-auto'>
                      <div className='relative pt-[133.33%]'>
                        <img src={portfolio.banner2} alt={portfolio.desc.project} className='absolute inset-0 w-full h-full object-cover pointer-events-none' />
                      </div>
                    </div>
                  )}
                  <div className={`flex-1 ${portfolio.desc.location ? 'sm:pl-4 xl:pl-8 pt-4 sm:pt-0' : ''}`}>
                    <div className='flex'>
                      <div className={title_class}>Project:</div>
                      <div className={body_class}>{portfolio.desc.project || 'SHINE HOUSE'}</div>
                    </div>
                    {portfolio.desc.owner && (
                      <div className='flex'>
                        <div className={title_class}>Owner:</div>
                        <div className={body_class}>{portfolio.desc.owner}</div>
                      </div>
                    )}
                    {portfolio.desc.location && (
                      <div className='flex'>
                        <div className={title_class}>Location:</div>
                        <div className={body_class}>{portfolio.desc.location}</div>
                      </div>
                    )}
                    {portfolio.desc.architect && (
                      <div className='flex'>
                        <div className={title_class}>Architect:</div>
                        <div className={body_class}>{portfolio.desc.architect}</div>
                      </div>
                    )}
                    {portfolio.desc.budget && (
                      <div className='flex'>
                        <div className={title_class}>Budget:</div>
                        <div className={body_class}>{portfolio.desc.budget}</div>
                      </div>
                    )}
                    {portfolio.desc.siteArea && (
                      <div className='flex'>
                        <div className={title_class}>SiteArea:</div>
                        <div className={body_class}>{portfolio.desc.siteArea}</div>
                      </div>
                    )}
                    {_.size(portfolio.desc.facilities) > 0 && (
                      <div className='block'>
                        <div className={title_class}>Facilities:</div>
                        {_.map(portfolio.desc.facilities, (facility) => {
                          return (
                            <div key={facility} className={body_class}>
                              <span className='px-1 text-base leading-3 tablet:text-xl'>•</span> {facility}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
                <div className='mt-4 sm:-mx-2'>
                  <Slider {...settings}>
                    {_.map(portfolio.images, (img, idx) => {
                      return (
                        <div key={idx} className='px-0 sm:px-2'>
                          <div onClick={() => previewImage(idx)} className='relative pt-[75%] cursor-pointer'>
                            <img src={img} alt={idx} className='absolute inset-0 w-full h-full object-cover pointer-events-none' />
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
                <div className='text-center'>
                  <Button name='BACK TO PORTFOLIO' onClick={() => navigate(routeName.portfolio)} className='mt-4 sm:mt-10' />
                </div>

                {isPreview && (
                  <div onClick={() => setIsPreview(false)} className='fixed inset-0 bg-white/50 backdrop-blur z-10 p-4'>
                    <img src={preview} alt='img-preview' onClick={(e) => e.stopPropagation()} className='md:max-w-[75%] w-auto h-full object-contain mx-auto' />
                  </div>
                )}
              </>
            )) || (
              <div className='text-center'>
                <FontAwesomeIcon icon={faCircleExclamation} className='text-7xl' />
                <p className='font-semibold text-3xl tracking-[3px] pt-6'>Content Not Found</p>
                <Button name='BACK TO PORTFOLIO' onClick={() => navigate(routeName.portfolio)} className='mt-6' />
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
