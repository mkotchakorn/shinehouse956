import { useState, useEffect } from 'react';
import _ from 'lodash';
import AppLayout from '../../component/AppLayout';
import Button from '../../component/common/Button';
import { portfoliosAll } from '../../assets/data/portfolio/portfolio';
import { routeName } from '../../routes/routes';

export default function Portfolio() {
  const DEFAULT_LENGTH = 16;
  const UP_TO_LENGTH = 8;
  const defaultAll = portfoliosAll;
  const defaultInterior = portfoliosAll.filter((p) => p.type === 'interior');
  const defaultExterior = portfoliosAll.filter((p) => p.type === 'exterior');
  const [portfolios, setPortfolios] = useState(defaultAll.slice(0, DEFAULT_LENGTH));
  const [filter, setFilter] = useState('all');

  const onChangeFilter = (filter) => {
    setFilter(filter);
    if (filter === 'interior') setPortfolios(defaultInterior.slice(0, DEFAULT_LENGTH));
    else if (filter === 'exterior') setPortfolios(defaultExterior.slice(0, DEFAULT_LENGTH));
    else setPortfolios(defaultAll.slice(0, DEFAULT_LENGTH));
  };

  const seeMorePage = () => {
    const portfolioNowLength = portfolios.length;
    if (filter === 'interior') setPortfolios(defaultInterior.slice(0, portfolioNowLength + UP_TO_LENGTH));
    else if (filter === 'exterior') setPortfolios(defaultExterior.slice(0, portfolioNowLength + UP_TO_LENGTH));
    else setPortfolios(portfoliosAll.slice(0, portfolioNowLength + UP_TO_LENGTH));
  };

  const checkLastItemByFilter = () => {
    const portfolioNowLength = portfolios.length;
    if (filter === 'interior') return portfolioNowLength === defaultInterior.length;
    else if (filter === 'exterior') return portfolioNowLength === defaultExterior.length;
    else return portfolioNowLength === portfoliosAll.length;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppLayout>
      <div className='container'>
        <div className='pt-10'>
          <div className='card'>
            <div className='sm:flex justify-between items-center'>
              <p className='font-semibold header tracking-[3px] pb-2'>PORTFOLIO</p>
              <div className='sm:flex items-center -mx-[10px] sm:-mx-[6px]'>
                <div className='radio-item'>
                  <input type='radio' name='all' id='all' checked={filter === 'all'} onChange={() => onChangeFilter('all')} className='custom-radio' />
                  <label htmlFor='all'>All</label>
                </div>
                <div className='radio-item'>
                  <input type='radio' name='exterior' id='exterior' checked={filter === 'exterior'} onChange={() => onChangeFilter('exterior')} className='custom-radio' />
                  <label htmlFor='exterior'>Exterior</label>
                </div>
                <div className='radio-item'>
                  <input type='radio' name='interior' id='interior' checked={filter === 'interior'} onChange={() => onChangeFilter('interior')} className='custom-radio' />
                  <label htmlFor='interior'>Interior</label>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap -mx-2'>
              {_.map(portfolios, (portfolio, idx) => {
                return (
                  <div key={idx} className='p-2 w-1/2 sm:w-1/3 md:w-1/4'>
                    <div onClick={() => window.location.href = `${routeName.portfolio}/${portfolio.type}/${portfolio.path}`} className='card-thumbnail cursor-pointer'>
                      <div className='overflow-hidden'>
                        <div className='thumbnail'>
                          <img src={portfolio.preview} alt={portfolio.project} title={portfolio.type} />
                        </div>
                      </div>
                      <p className='font-semibold uppercase tracking-[2px] text-center truncate max-w-[90%] mx-auto pt-[2px]'>{portfolio.project || 'SHINE HOUSE'}</p>
                    </div>
                  </div>
                );
              })}
              <div className='mt-6 w-full text-center'>
                <Button name='SEE MORE' onClick={seeMorePage} disabled={checkLastItemByFilter()} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
