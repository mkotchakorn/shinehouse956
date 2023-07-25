import _ from 'lodash';
import Button from '../../component/common/Button';
import { routeName } from '../../routes/routes';
import { portfoliosHome } from '../../assets/data/portfolio/portfolio';

export default function PortfolioPreview(props) {
  return (
    <div className='card'>
      <p className='font-semibold header tracking-[3px] pb-2'>PORTFOLIO</p>
      <div className='flex flex-wrap -mx-2'>
        {_.map(portfoliosHome, (portfolio, idx) => {
          return (
            <div key={idx} className='p-2 w-1/2 sm:w-1/3 md:w-1/4'>
              <div onClick={() => window.location.href = `${routeName.portfolio}/${portfolio.type}/${portfolio.path}`} className='card-thumbnail cursor-pointer'>
                <div className='overflow-hidden'>
                  <div className='thumbnail'>
                    <img src={portfolio.banner} alt={portfolio.desc.project} title={portfolio.type} />
                  </div>
                </div>
                <p className='font-semibold uppercase tracking-[2px] text-center truncate max-w-[90%] mx-auto pt-[2px]'>{portfolio.desc.project || 'SHINE HOUSE'}</p>
              </div>
            </div>
          );
        })}
        <div className='mt-6 w-full text-center'>
          <Button name='SEE MORE' onClick={() => window.location.href = routeName.portfolio} />
        </div>
      </div>
    </div>
  );
}
