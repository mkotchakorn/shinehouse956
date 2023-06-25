import React from 'react';
import _ from 'lodash';
import { contact } from '../assets/data/contact/contact';

export default function SiteFooter() {
  const line = _.find(contact.get_in_touch, { name: 'line' });
  const blog = 'site-menu-blog bg-white h-11 w-11 sm:h-12 sm:w-12 rounded-full flex items-center justify-center my-2 cursor-pointer';

  return (
    <div className='fixed right-4 bottom-4'>
      <div className='flex flex-col'>
        <div id='facebook-message' className={`${blog}`}>
          <div onClick={() => null} className='w-6 h-6 fill-black'>
            <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512' className='w-full h-full'>
              <path d='M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z' />
            </svg>
          </div>
        </div>
        <div id='line' className={`${blog}`}>
          <div onClick={() => window.open(line.path, '_blank', 'noreferrer')} className='w-6 h-6 text-black'>
            {line.icon}
          </div>
        </div>
      </div>
    </div>
  );
}
