import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import _ from 'lodash';
import AppLayout from '../../component/AppLayout';
// import { portfolios } from '../../assets/data/portfolio/portfolio';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../component/common/Button';
import { routeName } from '../../routes/routes';

export default function PortfolioId() {
  const navigate = useNavigate();
  const location = useLocation();
  const _id = Number(_.last(location.pathname.substring(1).split('/')));
  // const portfolio = _id ? portfolios[_id - 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppLayout>
      <div className='container'>
        <div className='pt-10'>
          <div className='card'>
            asd
            {/* {(portfolio && (
              <div>
                <p className='font-semibold text-3xl tracking-[3px] pb-2'>{portfolio.title}</p>
                <div className='sm:flex'>
                  <img src={portfolio.image} alt={portfolio.title} className='mt-4 w-full sm:w-1/2 sm:pr-2' />
                  <div className='mt-4 w-full sm:w-1/2 sm:pl-2'>
                    <p className='indent-10 text-justify'>{portfolio.desc}</p>
                    <Button name='ติดต่อ SHINE HOUSE' onClick={() => navigate(routeName.contact)} className='mt-5' />
                  </div>
                </div>
              </div>
            )) || (
              <div className='text-center'>
                <FontAwesomeIcon icon={faCircleExclamation} className='text-7xl' />
                <p className='font-semibold text-3xl tracking-[3px] pt-6'>Content Not Found</p>
                <Button name='BACK' onClick={() => navigate(routeName.portfolio)} className='mt-6' />
              </div>
            )} */}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
