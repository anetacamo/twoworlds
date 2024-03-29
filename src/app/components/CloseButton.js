import React from 'react';

export default function CloseButton({ handleClick }) {
  return (
    <div
      className='hamburger'
      onClick={() => handleClick()}
      style={{ position: 'absolute', top: '2rem', right: '2rem' }}
    >
      <div className='hamburger-menu'>
        <div className={`bar-01 icon-bar opened`}></div>
        <div className={`bar-02 icon-bar opened`}></div>
        <div className={`bar-03 icon-bar opened`}></div>
      </div>
    </div>
  );
}
