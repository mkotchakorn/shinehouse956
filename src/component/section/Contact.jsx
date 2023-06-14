import { useState } from 'react';
import { contact } from '../../assets/data/contact/contact';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';

const inittialContact = {
  full_name: '',
  email: '',
  phone: '',
  message: '',
};

export default function SectionContact() {
  const [getInTouchForm, setGetInTouchForm] = useState(inittialContact);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setGetInTouchForm({ ...getInTouchForm, [name]: value });
  };

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='w-full md:w-1/2 card md:py-8'>
        <p className='text-center font-semibold text-3xl tracking-[3px]'>CONTACT US</p>
        <div className='pt-6'>
          <p className='text-secondary font-semibold text-base'>ADDRESS</p>
          <p className='whitespace-pre-wrap font-medium pt-3'>{contact.address}</p>
        </div>
        <div className='sm:flex justify-between'>
          <div>
            <div className='pt-6'>
              <p className='text-secondary font-semibold text-base'>CALL US</p>
              <div className='whitespace-pre-wrap font-medium pt-2'>
                {contact.call.map((call, idx) => {
                  return (
                    <a key={call} href={`tel:${call}`} className='hover:text-secondary transition-all duration-300'>
                      {call}
                      {idx + 1 < contact.call.length && <span className='pr-1 !text-black'>,</span>}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className='pt-6'>
              <p className='text-secondary font-semibold text-base'>GET IN TOUCH</p>
              <div className='flex items-center mt-2'>
                {contact.get_in_touch.map((social) => {
                  return (
                    <button
                      key={social.name}
                      onClick={() => window.open(social.path, '_blank', 'noreferrer')}
                      className='mr-3 w-8 h-8 !outline-none !shadow-none !bg-transparent cursor-pointer hover:text-secondary transition-all duration-300'
                    >
                      {social.icon}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='flex items-end'>
            <img src={contact.qr_code} alt='qr_code' className='w-full max-w-[132px] mt-3' />
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/2 card bg-black/50 md:py-8 xl:px-10'>
        <div>
          <p className='text-white font-medium text-base pb-2'>FULL NAME</p>
          <Input name='full_name' onChange={handleChange} value={getInTouchForm.full_name} />
        </div>
        <div className='sm:flex'>
          <div className='w-full pt-4 sm:pr-2'>
            <p className='text-white font-medium text-base pb-2'>E-MAIL</p>
            <Input name='email' onChange={handleChange} value={getInTouchForm.email} />
          </div>
          <div className='w-full pt-4 sm:pl-2'>
            <p className='text-white font-medium text-base pb-2'>PHONE</p>
            <Input name='phone' onChange={handleChange} value={getInTouchForm.phone} />
          </div>
        </div>
        <div className='pt-4'>
          <p className='text-white font-medium text-base pb-2'>MESSAGE</p>
          <Textarea name='message' onChange={handleChange} value={getInTouchForm.message} rows={4} />
        </div>
        <div className='mt-4 text-center'>
          <Button name='ยืนยัน' onClick={() => null} className='!px-10' />
        </div>
      </div>
    </div>
  );
}
