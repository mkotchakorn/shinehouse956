import { useState, useEffect } from 'react';
import _ from 'lodash';
import logo from '../assets/images/dLogo.png';
import { router, routeName } from '../routes/routes';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark as faXMark } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const gotoHome = () => navigate(routeName.home);

  useEffect(() => {
    if (isExpanded) document.body.classList.add('overflow-hidden', 'tablet:overflow-auto');
    else document.body.classList.remove('overflow-hidden', 'tablet:overflow-auto');
  }, [isExpanded]);

  return (
    <div className={`fixed top-0 z-10 navbar w-full h-16 tablet:h-navbar`}>
      <nav className='w-full h-full'>
        <div className='container py-3 flex justify-between w-full h-full'>
          <div className='flex items-end cursor-pointer'>
            <img src={logo} alt='logo' onClick={gotoHome} className='w-auto h-full' />
            <div onClick={gotoHome} className='text-xxs font-semibold pl-2 -mb-[2px]'>
              <p>SHINE HOUSE 956</p>
              <p className='pt-[2px]'>COMPANY LIMITED</p>
            </div>
          </div>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faBars} onClick={() => setIsExpanded((exp) => !exp)} className='tablet:hidden text-xl py-4' />
            <div className={`${isExpanded ? 'isExpanded' : ''} nav-menu flex items-center`}>
              {_.filter(router, (route) => route.show).map((r) => {
                return (
                  <Link key={r.name} to={r.path} className='cursor-pointer pt-3'>
                    <div
                      className={`tablet:ml-4 px-1 py-[2px] text-[13px] rounded-full uppercase text-sm w-[104px] text-center cursor-pointer transition-colors duration-200 font-semibold hover:text-primary`}
                    >
                      {r.name}
                    </div>
                  </Link>
                );
              })}
              <div onClick={() => setIsExpanded((exp) => !exp)} className='rounded-full !mt-8 w-8 h-8 flex items-center justify-center tablet:hidden'>
                <FontAwesomeIcon icon={faXMark} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
