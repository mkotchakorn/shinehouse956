import { useState } from 'react';
import logo from '../assets/images/logo.png';
import { router } from '../routes/routes';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark as faXMark } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='fixed top-0 z-10 navbar w-full h-20'>
      <nav className='w-full h-full'>
        <div className='container py-4 flex justify-between w-full h-full'>
          <div className='flex items-center'>
            <img src={logo} alt='logo' className='w-auto h-full' />
            <div className='text-white text-xxs'>
              <p>SHINE HOUSE 956</p>
              <p className='pt-1'>COMPANY LIMITED</p>
            </div>
          </div>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faBars} onClick={() => setIsExpanded((exp) => !exp)} className='text-white tablet:hidden' />
            <div className={`${isExpanded ? 'isExpanded' : ''} nav-menu flex items-center`}>
              {router.map((r) => {
                return (
                  <div
                    key={r.name}
                    className='text-white tablet:ml-4 px-4 py-1 rounded-full border-2 border-primary uppercase text-sm w-[105px] text-center cursor-pointer transition-colors hover:bg-primary'
                  >
                    <Link to={r.path} className='cursor-pointer'>
                      {r.name}
                    </Link>
                  </div>
                );
              })}
              <div onClick={() => setIsExpanded((exp) => !exp)} className='text-white rounded-full border-2 border-primary !mt-8 w-8 h-8 flex items-center justify-center tablet:hidden'>
                <FontAwesomeIcon icon={faXMark} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
