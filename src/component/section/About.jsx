import React from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { routeName } from '../../routes/routes';
import { about } from '../../assets/data/about/about';

export default function SectionAbout(props) {
  const navigate = useNavigate();

  return (
    <div className='card'>
      <div className='flex flex-col sm:flex-row'>
        <img src={about.banner} alt='about' className='mx-auto max-w-[300px] flex-none object-cover hidden lg:block' />
        <div className='pt-4 sm:pt-0 lg:pl-4 xl:pl-8 flex-1'>
          <p className='font-bold header xl:text-4xl tracking-[3px] mb-1 pb-2 tablet:pb-0'>{about.title}</p>
          {_.map(about.concept, (cpt, idx) => {
            return (
              <p key={cpt} className='inline-block tablet:text-base font-bold text-primary tracking-[2px]'>
                {cpt}
                {idx + 1 < about.concept.length && <span className='px-1 text-base leading-3 tablet:text-xl'>•</span>}
              </p>
            );
          })}
          <p className='pt-5 whitespace-pre-wrap'>{about.paragraph_1}</p>
          <p className='pt-5 whitespace-pre-wrap'>{about.paragraph_2}</p>
          <p className='pt-5 whitespace-pre-wrap'>{about.paragraph_3}</p>
          <p className='pt-5 whitespace-pre-wrap'>{about.paragraph_4}</p>

          <Button name='ติดต่อ SHINE HOUSE' onClick={() => (props.onContact ? props.onContact() : navigate(routeName.contact))} className='mt-5' />
        </div>
      </div>
    </div>
  );
}
