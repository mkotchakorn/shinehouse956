import _ from 'lodash';
import Button from '../../component/common/Button';
import { routeName } from '../../routes/routes';
import { portfoliosHome } from '../../assets/data/portfolio/portfolio';
import { titleClassName } from './portfolio';

export default function PortfolioPreview(props) {
  return (
    <div className='card'>
      <p className='font-medium header tracking-[2px] pb-4'>PORTFOLIO</p>
      <div className='flex flex-wrap -mx-2'>
        {_.map(portfoliosHome, (portfolio, idx) => {
          return (
            <div key={idx} className='px-2 py-1 w-1/2 sm:w-1/3 md:w-1/4'>
              <div onClick={() => window.location.href = `${routeName.portfolio}/${portfolio.type}/${portfolio.path}`} className='card-thumbnail cursor-pointer'>
                <div className='overflow-hidden rounded-lg'>
                  <div className='thumbnail'>
                    <img src={portfolio.banner} alt={portfolio.desc.project} title={portfolio.type} />
                  </div>
                </div>
                <p className={titleClassName}>{portfolio.desc.project || 'SHINE HOUSE'}</p>
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
