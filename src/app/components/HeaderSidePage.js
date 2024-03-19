'use client';
import React, { useState } from 'react';
import Hamburger from './Hamburger';
import Link from 'next/link';

export default function HeaderSidePage() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <Link href='/'>
        <div className='logo desktop'>
          <div>
            To Verdener
            <br />
            <span>Samme Mål</span>
          </div>
        </div>
      </Link>
      <div className='logo mobile'>
        <div>
          <img className='logoicon' src='images/icons/ball2.png' />
        </div>
      </div>
      <nav>
        <ul>
          <li className={`right 'highlighted'`}>Om Claudine</li>
          <li>
            <img className='icon' src='images/icons/airplane.png' />
          </li>
          <li>Om Mark</li>
        </ul>
      </nav>
      <nav className='desktop'>
        <ul>
          <li>EN</li>
          <li>DA</li>
        </ul>
      </nav>
      <Hamburger open={open} handleClick={() => setOpen(!open)} />
      <div
        className={`overlay ${open ? 'open' : ''}`}
        onClick={() => setOpen(false)}
      ></div>
    </header>
  );
}
