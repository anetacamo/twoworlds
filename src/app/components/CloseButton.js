import React from 'react';

export default function CloseButton({ handleClick, noStyle }) {
  return (
    <div
      className='hamburger'
      onClick={() => handleClick()}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          handleClick();
        }
      }}
      role='button'
      tabIndex='0'
      style={
        !noStyle
          ? { position: 'absolute', top: '2rem', right: '2rem' }
          : undefined
      }
    >
      <div className='hamburger-menu'>
        <div className={`bar-01 icon-bar opened`}></div>
        <div className={`bar-02 icon-bar opened`}></div>
        <div className={`bar-03 icon-bar opened`}></div>
      </div>
    </div>
  );
}
