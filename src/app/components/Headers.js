'use client';
import React, { useState } from 'react';
import Hamburger from './Hamburger';

<<<<<<< HEAD
// add the link to homepage
// + make sure it loads well
// + image gallery
// mark is showing claudine
// add fullscreen
// add button for pause and play
// button play again after its over + Afspil igen
// portrain/landscape mode

=======
>>>>>>> 3c1ee4f878ed6f822b0a41a5d4b4c9e67b398b16
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
