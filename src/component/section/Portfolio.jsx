import React from 'react';
import _ from 'lodash';
import { portfolios } from '../../assets/data/portfolio/portfolio';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { routeName } from '../../routes/routes';

export default function SectionPortfolio(props) {
  const navigate = useNavigate();

  return (
    <div className='card'>
      <p className='font-semibold header tracking-[3px] pb-2'>PORTFOLIO</p>
      <div className='flex flex-wrap'>
        {_.map(portfolios.slice(0, props.show || portfolios.length), (portfolio, idx) => {
          return (
            <div key={portfolio.title} className='py-2 w-1/2 sm:w-1/3 md:w-1/4'>
              <div onClick={() => navigate(`${routeName.portfolio}/${idx + 1}`)} className='card-thumbnail cursor-pointer'>
                <div className='overflow-hidden'>
                  <div className='thumbnail'>
                    <img src={portfolio.image} alt={portfolio.title} />
                  </div>
                </div>
                <p className='font-semibold uppercase tracking-[2px] text-center truncate max-w-[90%] mx-auto pt-[2px]'>{portfolio.title}</p>
              </div>
            </div>
          );
        })}
        {props.canSeeMore && (
          <div className='mt-6 w-full text-center'>
            <Button name='SEE MORE' onClick={() => navigate(routeName.portfolio)} />
          </div>
        )}
        {props.canGotoContact && (
          <div className='mt-6 w-full text-center'>
            <Button name='ติดต่อ SHINE HOUSE' onClick={() => navigate(routeName.contact)} />
          </div>
        )}
      </div>
    </div>
  );
}
