import React from 'react';

export default function NameSwitch({ player, setPlayer }) {
  return (
    <nav>
      <ul>
        <li
          className={`hover-teal ${player === 0 ? 'highlighted' : ''}`}
          onClick={() => setPlayer(0)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              setPlayer(0);
            }
          }}
          role='button'
          tabIndex='0'
        >
          Mark
        </li>

        <li>
          <img
            className='icon'
            src='images/icons/airplane.png'
            style={{ marginLeft: '-8px' }}
          />
        </li>

        <li
          className={`right hover-orange ${player === 1 ? 'highlighted' : ''}`}
          onClick={() => setPlayer(1)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              setPlayer(1);
            }
          }}
          role='button' 
          tabIndex='0'
        >
          Claudine
        </li>
      </ul>
    </nav>
  );
}
