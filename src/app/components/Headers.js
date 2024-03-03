'use client';
import React, { useState } from 'react';
import Hamburger from '../components/Hamburger';

export default function Header({ player, setPlayer }) {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className='logo desktop'>
        <div>
          To Verdener
          <br />
          <span>Samme Mål</span>
        </div>
      </div>

      <div className='logo mobile'>
        <div>
          <img className='logoicon' src='images/icons/ball2.png' />
        </div>
      </div>
      <nav>
        <ul>
          <li
            className={`right ${player === 1 ? 'highlighted' : ''}`}
            onClick={() => setPlayer(1)}
          >
            Om Claudine
          </li>
          <li>
            <img className='icon' src='images/icons/airplane.png' />
          </li>
          <li
            className={player === 0 ? 'highlighted' : ''}
            onClick={() => setPlayer(0)}
          >
            Om Mark
          </li>
        </ul>
      </nav>
      <nav className='desktop'>
        <ul>
          <li>Projekt</li>
          <li>DHF</li>
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
