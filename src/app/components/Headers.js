export default function Header({ player, setPlayer }) {
  return (
    <header>
      <div className='logo'>
        <div>
          To Verdener
          <br />
          <span>Samme Mål</span>
        </div>
      </div>
      <nav>
        <ul>
          <li
            className={player === 1 ? 'highlighted' : ''}
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
      <nav>
        <ul>
          {/* <li>Hvem er vi?</li> */}
          <li>Projekt</li>
          <li>DHF</li>
        </ul>
      </nav>
    </header>
  );
}
