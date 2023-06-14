import { useState, useEffect } from 'react';
import logo from '../assets/images/dLogo.png';
import { router } from '../routes/routes';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark as faXMark } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) document.body.classList.add('overflow-hidden', 'tablet:overflow-auto');
    else document.body.classList.remove('overflow-hidden', 'tablet:overflow-auto');
  }, [isExpanded]);

  return (
    <div className={`fixed top-0 z-10 navbar w-full h-20 ${!isExpanded && 'backdrop-blur'} bg-background/50 border-b border-b-background/20`}>
      <nav className='w-full h-full'>
        <div className='container py-2 flex justify-between w-full h-full'>
          <div className='flex items-end'>
            <img src={logo} alt='logo' className='w-auto h-full' />
            <div className='text-xxs font-semibold pb-1'>
              <p>SHINE HOUSE 956</p>
              <p className='pt-[2px]'>COMPANY LIMITED</p>
            </div>
          </div>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faBars} onClick={() => setIsExpanded((exp) => !exp)} className='tablet:hidden' />
            <div className={`${isExpanded ? 'isExpanded' : ''} nav-menu flex items-center`}>
              {router.map((r) => {
                return (
                  <Link key={r.name} to={r.path} className='cursor-pointer'>
                    <div
                      className={`tablet:ml-4 px-2 py-1 rounded-full border-2 border-primary uppercase text-sm w-[110px] text-center cursor-pointer transition-colors font-semibold hover:bg-primary hover:text-white 
                      ${r.path === location.pathname ? 'bg-primary text-white' : ''}`}
                    >
                      {r.name}
                    </div>
                  </Link>
                );
              })}
              <div onClick={() => setIsExpanded((exp) => !exp)} className='rounded-full border-2 border-primary !mt-8 w-8 h-8 flex items-center justify-center tablet:hidden'>
                <FontAwesomeIcon icon={faXMark} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
