import React from 'react';
import Link from 'next/link';

export default function Logo() {
  return (
    <>
      <div className='logo desktop' style={{ width: 180 }}>
        <Link href='/'>
          <div>
            To Verdener
            <br />
            <span>Samme Mål</span>
          </div>
        </Link>
      </div>
      <div className='logo mobile'>
        <Link href='/'>
          <div>
            <img className='logoicon' src='images/icons/ball2.png' />
          </div>
        </Link>
      </div>
    </>
  );
}
