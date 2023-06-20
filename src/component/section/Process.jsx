import React from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { routeName } from '../../routes/routes';
import { process } from '../../assets/data/process/process';

export default function SectionProcess(props) {
  const navigate = useNavigate();

  return (
    <div className='card'>
      <div className='font-semibold text-3xl tracking-[1px]'>
        <p>ขั้นตอนการออกแบบ</p>
        <p>
          และก่อสร้าง กับ <span className='tracking-[2px] sm:text-4xl text-secondary'>SHINE HOUSE</span>
        </p>
      </div>
      <div className='flex flex-wrap -mx-2 mt-5 sm:mt-10'>
        {_.map(process, (p, idx) => {
          return (
            <div key={p.desc} className='px-2 py-4 w-1/2 sm:w-1/3'>
              <div className='flex flex-col md:max-w-[60%] lg:max-w-[80%] mx-auto'>
                <div className='w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-xl font-semibold'>{idx + 1}</div>
                <img src={p.image} alt={p.desc} className='h-20 mx-auto mt-2' />
                <p className='text-center mt-5 whitespace-pre-wrap'>{p.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      {props.canGotoContact && (
        <div className='mt-6 w-full text-center'>
          <Button name='ติดต่อ SHINE HOUSE' onClick={() => navigate(routeName.contact)} />
        </div>
      )}
    </div>
  );
}
