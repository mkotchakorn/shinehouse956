import React from 'react';

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`bg-secondary text-white text-base font-semibold !shadow-none px-4 py-1 rounded-full transition-all duration-300 hover:bg-primary_action ${props.className}`}
    >
      {props.name}
    </button>
  );
}
