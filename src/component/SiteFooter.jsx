import React from 'react';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { contact } from '../assets/data/contact/contact';

export default function SiteFooter() {
  const line = _.find(contact.get_in_touch, { name: 'line' });
  const blog = 'bg-white h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center my-2 cursor-pointer';

  return (
    <div className='fixed right-4 bottom-4'>
      <div className='flex flex-col'>
        <div id='facebook-message' className={`${blog}`}>
          <FontAwesomeIcon icon={faMessage} className='w-7 h-7 text-[#3B5998]' />
        </div>
        <div id='line' className={`${blog}`}>
          <div onClick={() =>  window.open(line.path, '_blank', 'noreferrer')} className='w-7 h-7 text-line'>
            {line.icon}
          </div>
        </div>
      </div>
    </div>
  );
}
