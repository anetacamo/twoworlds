'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function GridGallery({ images }) {
  const [open, setOpen] = useState(null);
  return (
    <>
      <div className={`overlay ${open != null ? 'open' : ''} photo-overlay`}>
        {open != null && (
          <div className='hamburger' onClick={() => setOpen(null)}>
            <div className='hamburger-menu'>
              <div className={`bar-01 icon-bar opened`}></div>
              <div className={`bar-02 icon-bar opened`}></div>
              <div className={`bar-03 icon-bar opened`}></div>
            </div>
          </div>
        )}
        {open != null && (
          <div className='img-holder'>
            <div className='container'>
              <img
                src={`/images/${images[open]}.png`}
                className='img-contain'
              />
            </div>
          </div>
        )}
        {open != null && (
          <div className='arrow-holder'>
            <div
              className='arrow-left'
              onClick={() => setOpen(open === 0 ? images.length - 1 : open - 1)}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div
              className='arrow-right'
              onClick={() => setOpen(open + 1 === images.length ? 0 : open + 1)}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        )}
        {open != null && (
          <div className='caption-holder'>
            <div className='caption'>
              {open + 1} / {images.length} <i>by Tine Harden</i>
            </div>
          </div>
        )}
      </div>

      <div className='gallery large-gallery grid-gallery'>
        {images.map((image, index) => (
          <div className='container' key={index} onClick={() => setOpen(index)}>
            <img src={`/images/${image}.png`} />
          </div>
        ))}
      </div>
    </>
  );
}
