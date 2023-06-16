import React from 'react';

export default function Button(props) {
  return (
    <button
      type='button'
      onClick={props.onClick}
      className={`bg-secondary text-white lg:text-base font-semibold !shadow-none px-4 py-1 rounded-full 
      transition-all duration-300 hover:bg-primary_action ${props.className}`}
    >
      {props.name}
    </button>
  );
}
