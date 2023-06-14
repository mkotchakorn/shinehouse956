import React from 'react';

export default function Input(props) {
  return (
    <input
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      className='bg-white/80 transition-all duration-300 rounded-full w-full px-4 py-2 text-base !shadow-none outline outline-2 outline-transparent focus:outline-secondary'
    />
  );
}
