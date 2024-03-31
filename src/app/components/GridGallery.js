'use client';
import React, { useState, useRef } from 'react';
import CloseButton from './CloseButton';
import Arrows from './Arrows';

export default function GridGallery({ images }) {
  const [open, setOpen] = useState(null);
  const overlayRef = useRef(null);

  const handleImageClick = (index) => {
    setOpen(index);
    overlayRef.current.focus();
  };

  return (
    <>
      <div className='gallery large-gallery grid-gallery'>
        {images.map((image, index) => (
          <div
            className='container'
            key={index}
            onClick={() => handleImageClick(index)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                handleImageClick(index);
              }
            }}
            role='button'
            tabIndex='0'
          >
            <img src={`/images/${image.image}.png`} />
          </div>
        ))}
      </div>

      <div
        ref={overlayRef}
        className={`overlay ${open != null ? 'open' : ''} photo-overlay`}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && open) {
            setOpen(null);
          } else if (event.key === 'ArrowLeft' && open != null) {
            setOpen(open === 0 ? images.length - 1 : open - 1);
          } else if (event.key === 'ArrowRight' && open != null) {
            setOpen(open + 1 === images.length ? 0 : open + 1);
          }
        }}
        tabIndex={0}
      >
        {open != null && (
          <>
            <CloseButton handleClick={() => setOpen(null)} noStyle />
            <div className='img-holder'>
              <div className='container'>
                <img
                  src={`/images/${images[open].image}.png`}
                  className='img-contain'
                />
              </div>
            </div>
            <Arrows
              handleLeftClick={() =>
                setOpen(open === 0 ? images.length - 1 : open - 1)
              }
              handleRightClick={() =>
                setOpen(open + 1 === images.length ? 0 : open + 1)
              }
            />
            <div
              className='caption-holder'
              tabIndex={0}
              onKeyDown={() => setOpen(null)}
            >
              <div className='caption'>
                {open + 1} / {images.length}{' '}
                <i>{images[open].caption} by Tine Harden</i>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
