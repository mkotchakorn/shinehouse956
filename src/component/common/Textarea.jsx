import React from 'react';

export default function Textarea(props) {
  return (
    <textarea
      rows={props.rows || 3}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      className='bg-white/80 rounded-2xl w-full px-4 py-2 transition-all duration-300 text-base !shadow-none outline outline-2 outline-transparent focus:outline-secondary resize-none'
    />
  );
}
