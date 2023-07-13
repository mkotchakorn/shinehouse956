import { useState } from 'react';
import _ from 'lodash';
import emailjs from '@emailjs/browser';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';
import Spinner from '../common/Spinner';
import { contact } from '../../assets/data/contact/contact';
import { emailJsConfig } from '../../constants/config';

const initialForm = {
  full_name: '',
  email: '',
  phone: '',
  message: '',
};

const initialErrorForm = {
  full_name: '',
  email: '',
  emailValidation: '',
  phone: '',
  phoneValidation: '',
};

export default function SectionContact() {
  const SENDING_TIME_OUT = 1000;
  const [getInTouchForm, setGetInTouchForm] = useState(initialForm);
  const [error, setError] = useState(initialErrorForm);
  const [isSending, setIsSending] = useState(false);
  const [isSendSuccess, setIsSendSuccess] = useState('');

  const handleChange = (e) => {
    setError(initialErrorForm);
    const name = e.target.name;
    let value = e.target.value;
    if (name === 'email') {
      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      setError({ ...error, emailValidation: !value.match(validRegex) ? 'Invalid email format.' : '' });
    }
    if (name === 'phone') {
      value = value.replace(/[^0-9.]/g, '');
      const characterLength = value.length;
      setError({ ...error, phoneValidation: characterLength && characterLength < 9 ? 'Invalid phone format.' : '' });
    }
    setGetInTouchForm({ ...getInTouchForm, [name]: value });
  };

  const onSendForm = (e) => {
    if (!getInTouchForm.full_name || !getInTouchForm.email || !getInTouchForm.phone || error.emailValidation) {
      return setError({
        full_name: !getInTouchForm.full_name ? 'Please enter your full name.' : '',
        email: !getInTouchForm.email ? 'Please enter your email.' : '',
        phone: !getInTouchForm.phone ? 'Please enter your phone.' : '',
        emailValidation: error.emailValidation && getInTouchForm.email ? error.emailValidation : '',
      });
    }

    setIsSending(true);
    emailjs.send(emailJsConfig.service_id, emailJsConfig.template_id, getInTouchForm, emailJsConfig.public_key).then(
      () => {
        setTimeout(() => {
          setIsSending(false);
          setIsSendSuccess('Your message has been sent successfully.');
        }, SENDING_TIME_OUT);
        setTimeout(() => {
          setIsSendSuccess('');
          setGetInTouchForm(initialForm);
        }, SENDING_TIME_OUT + 3000);
      },
      (error) => {
        setTimeout(() => {
          setIsSending(false);
        }, SENDING_TIME_OUT);
      }
    );
  };

  return (
    <div className='flex flex-col md:flex-row mb-24 xl:mb-12'>
      <div className='w-full md:w-1/2 card md:py-8'>
        <p className='text-center font-semibold header tracking-[3px]'>CONTACT US</p>
        <div className='pt-6'>
          <p className='text-primary font-semibold text-base'>ADDRESS</p>
          <p className='whitespace-pre-wrap font-medium pt-3'>{contact.address}</p>
        </div>
        <div className='sm:flex justify-between'>
          <div>
            <div className='pt-6'>
              <p className='text-primary font-semibold text-base'>CALL US</p>
              <div className='whitespace-pre-wrap font-medium pt-2'>
                {_.map(contact.call, (call, idx) => {
                  return (
                    <a key={call} href={`tel:${call}`} className='hover:text-primary transition-all duration-300'>
                      {call}
                      {idx + 1 < contact.call.length && <span className='pr-1 !text-black'>,</span>}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className='pt-6'>
              <p className='text-primary font-semibold text-base'>GET IN TOUCH</p>
              <div className='flex items-center mt-2'>
                {_.map(contact.get_in_touch, (social) => {
                  return (
                    <button
                      key={social.name}
                      onClick={() => window.open(social.path, '_blank', 'noreferrer')}
                      className='mr-3 w-8 h-8 !outline-none !shadow-none !bg-transparent cursor-pointer hover:text-primary transition-all duration-300'
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
      <div className={`flex flex-col w-full md:w-1/2 card bg-black/70 md:pt-8 md:pb-5 xl:px-10 ${isSending || isSendSuccess ? 'pointer-events-none' : ''}`}>
        <div>
          <p className='text-white font-medium text-base pb-2'>FULL NAME</p>
          <Input name='full_name' onChange={handleChange} value={getInTouchForm.full_name} error={error.full_name} />
        </div>
        <div className='sm:flex'>
          <div className='w-full pt-4 sm:pr-2'>
            <p className='text-white font-medium text-base pb-2'>E-MAIL</p>
            <Input name='email' onChange={handleChange} value={getInTouchForm.email} error={error.emailValidation || error.email} />
          </div>
          <div className='w-full pt-4 sm:pl-2'>
            <p className='text-white font-medium text-base pb-2'>PHONE</p>
            <Input name='phone' onChange={handleChange} value={getInTouchForm.phone} error={error.phoneValidation || error.phone} />
          </div>
        </div>
        <div className='pt-4'>
          <p className='text-white font-medium text-base pb-2'>MESSAGE</p>
          <Textarea name='message' onChange={handleChange} value={getInTouchForm.message} rows={4} />
        </div>
        <div className='mt-auto text-center'>
          {(isSending && (
            <Button
              name={
                <div className='flex items-center'>
                  <Spinner />
                  <span className='pl-3'>SEND</span>
                </div>
              }
              className='!px-10 mt-4'
            />
          )) ||
            (isSendSuccess && <p className='text-white text-base font-semibold h-8 flex items-center justify-center mt-4'>{isSendSuccess}</p>) || (
              <Button name={'SEND'} onClick={onSendForm} className='!px-10 mt-4' />
            )}
        </div>
      </div>
    </div>
  );
}
