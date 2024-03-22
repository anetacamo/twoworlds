'use client';
import React, { useState } from 'react';
import Hamburger from './Hamburger';
import Link from 'next/link';

<<<<<<< HEAD
export default function HeaderSidePage({ setPlayerAndOpen, player }) {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className='logo desktop'>
        <Link href='/'>
=======
export default function HeaderSidePage() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <Link href='/'>
        <div className='logo desktop'>
>>>>>>> 3c1ee4f878ed6f822b0a41a5d4b4c9e67b398b16
          <div>
            To Verdener
            <br />
            <span>Samme Mål</span>
          </div>
<<<<<<< HEAD
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
=======
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
>>>>>>> 3c1ee4f878ed6f822b0a41a5d4b4c9e67b398b16
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
