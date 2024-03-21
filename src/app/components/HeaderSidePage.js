'use client';
import React, { useState } from 'react';
import Hamburger from './Hamburger';
import Link from 'next/link';

export default function HeaderSidePage({ setPlayerAndOpen, player }) {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className='logo desktop'>
        <Link href='/'>
          <div>
            To Verdener
            <br />
            <span>Samme Mål</span>
          </div>
        </Link>
      </div>

      <div className='logo mobile'>
        {' '}
        <Link href='/'>
          <div>
            <img className='logoicon' src='images/icons/ball2.png' />
          </div>{' '}
        </Link>
      </div>

      <nav>
        <ul>
          <li
            className={`right ${player === 1 ? 'highlighted' : ''}`}
            onClick={() => setPlayerAndOpen(1)}
          >
            Om Claudine
          </li>
          <li>
            <img className='icon' src='images/icons/airplane.png' />
          </li>
          <li
            className={player === 0 ? 'highlighted' : ''}
            onClick={() => setPlayerAndOpen(0)}
          >
            Om Mark
          </li>
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
