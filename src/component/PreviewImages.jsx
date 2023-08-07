/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const arrow_slick = 'absolute w-1/2 h-1/2 md:w-[50px] md:h-[100%] flex items-center'

export default function PreviewImages(props) {
  const imagesLength = props.images.length;
  const inputRef = useRef(null);
  const [idx, setIdx] = useState(props.idxImage || 0);

  useEffect(() => {
    setTimeout(() => {
      if (props.isPreview && inputRef.current) inputRef.current.focus();
    }, 500);
  }, [props.isPreview]);

  return (
    <div onClick={() => props.setIsPreview(false)} className='fixed inset-0 bg-black/60 backdrop-blur z-30 p-4 flex items-center justify-center'>
      <input
        ref={inputRef}
        type='text'
        onKeyDown={(e) => {
          e.stopPropagation();
          if (e.key === 'ArrowLeft' && idx > 0) setIdx(idx - 1);
          else if (e.key === 'ArrowRight' && idx + 1 !== imagesLength) setIdx(idx + 1);
          else if (e.key === 'Escape') props.setIsPreview(false);
        }}
        readonly
        inputmode='none'
        className='absolute h-0 w-0 opacity-0 overflow-hidden'
      />

      {idx !== 0 && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIdx(idx - 1);
            if (inputRef.current) inputRef.current.focus();
          }}
          className={`${arrow_slick} cursor-pointer justify-start left-0 pl-1 md:pl-3`}
        >
          <FontAwesomeIcon icon={faChevronLeft} className='text-white text-lg md:text-3xl opacity-75' />
        </div>
      )}
      <img
        id='img-preview'
        src={props.images[idx]}
        alt='img-preview'
        onClick={(e) => {
          e.stopPropagation();
          if (inputRef.current) inputRef.current.focus();
        }}
        className='max-w-[95%] md:max-w-[75%] w-auto h-auto max-h-full object-contain mx-auto'
      />
      {idx + 1 !== imagesLength && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIdx(idx + 1);
            if (inputRef.current) inputRef.current.focus();
          }}
          className={`${arrow_slick} cursor-pointer justify-end right-0 pr-1 md:pr-3`}
        >
          <FontAwesomeIcon icon={faChevronRight} className='text-white text-lg md:text-3xl opacity-75' />
        </div>
      )}
    </div>
  );
}
