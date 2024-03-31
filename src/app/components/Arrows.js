import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Arrows({
  handleLeftClick,
  handleRightClick,
  open,
  images,
}) {
  return (
    <div className='arrow-holder'>
      <div
        className='arrow-left'
        aria-label='Previous'
        onClick={() => handleLeftClick()}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            handleLeftClick();
          }
        }}
        role='button'
        tabIndex='0'
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div
        className='arrow-right'
        aria-label='Next'
        onClick={() => handleRightClick()}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            handleRightClick();
          }
        }}
        role='button'
        tabIndex='0'
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
}
