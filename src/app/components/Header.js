'use client';
import React, { useState } from 'react';
import Hamburger from './Hamburger';
import Logo from './Logo';
import NameSwitch from './NameSwitch';
import Link from 'next/link';

export default function Header({ player, handlePlayerChange }) {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <Logo />
      <NameSwitch setPlayer={handlePlayerChange} player={player} />
      <Hamburger open={open} handleClick={() => setOpen(!open)} />
      <div
        className={`overlay ${open ? 'open' : ''}`}
        onClick={() => setOpen(false)}
      >
        {open && (
          <ul className='overlay-menu flex'>
            <div className='main-links'>
              <Link href='/'>
                <li className='hover-orange'>om projekt</li>
              </Link>
              <Link href='/mark'>
                <li className='hover-orange'>om mark</li>
              </Link>
              <Link href='/claudine'>
                <li className='hover-orange'>om claudine</li>
              </Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <li className='hover-pink'>da</li> |
              <li className='hover-pink'>en</li>
            </div>
          </ul>
        )}
      </div>
    </header>
  );
}
