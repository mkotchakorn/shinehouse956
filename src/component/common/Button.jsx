import React from 'react';

export default function Button(props) {
  return (
    <button
      type='button'
      onClick={props.onClick}
      disabled={props.disabled}
      className={`bg-primary text-white lg:text-base --font-semibold font-medium !shadow-none px-4 py-1 rounded-full 
      transition-all duration-300 hover:bg-primary_action ${props.className} ${props.disabled ? 'pointer-events-none grayscale' : ''}`}
    >
      {props.name}
    </button>
  );
}
