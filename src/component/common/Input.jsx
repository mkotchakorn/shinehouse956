import React from 'react';

export default function Input(props) {
  return (
    <input
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.error}
      className={`transition-all duration-300 rounded-full w-full px-4 py-2 text-base text-ellipsis !shadow-none outline outline-2 outline-transparent ${
        props.error ? 'bg-red-100/80 placeholder:text-sm placeholder:text-red-800 focus:outline-red-800' : 'bg-background/80 focus:outline-primary'
      }`}
    />
  );
}
