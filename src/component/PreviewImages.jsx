/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function PreviewImages(props) {
  const imagesLength = props.images.length;
  const inputRef = useRef(null);
  const [idx, setIdx] = useState(props.idxImage || 0);
  //   const [touchstartX, setTouchstartX] = useState(0);
  //   const [touchendX, setTouchendX] = useState(0);

  //   const checkDirection = () => {
  //     if (touchendX < touchstartX && idx !== 0) {
  //       console.log('left', idx);
  //       setIdx(idx + 1);
  //       setTouchstartX(0);
  //       setTouchendX(0);
  //     }
  //     if (touchendX > touchstartX && idx + 1 !== imagesLength) {
  //       console.log('right', idx);
  //       setIdx(idx - 1);
  //       setTouchstartX(0);
  //       setTouchendX(0);
  //     }
  //   };

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
        className='absolute h-0 w-0 opacity-0 overflow-hidden'
      />

      {idx !== 0 && (
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={(e) => {
            e.stopPropagation();
            setIdx(idx - 1);
            if (inputRef.current) inputRef.current.focus();
          }}
          className='text-white text-lg md:text-3xl opacity-75 cursor-pointer relative -left-2 md:left-0'
        />
      )}
      <img
        id='img-preview'
        src={props.images[idx]}
        alt='img-preview'
        // onTouchStart={(e) => setTouchstartX(e.changedTouches[0].screenX)}
        // onTouchEnd={(e) => {
        //   setTouchendX(e.changedTouches[0].screenX);
        //   checkDirection();
        // }}
        onClick={(e) => {
          e.stopPropagation();
          if (inputRef.current) inputRef.current.focus();
        }}
        className='max-w-[95%] md:max-w-[75%] w-auto h-auto max-h-full object-contain mx-auto'
      />
      {idx + 1 !== imagesLength && (
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={(e) => {
            e.stopPropagation();
            setIdx(idx + 1);
            if (inputRef.current) inputRef.current.focus();
          }}
          className='text-white text-lg md:text-3xl opacity-75 cursor-pointer relative -right-2 md:right-0'
        />
      )}
    </div>
  );
}
