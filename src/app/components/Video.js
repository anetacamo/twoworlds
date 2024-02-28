export default function Video({ player, setPlayer }) {
  return (
    <section>
      <div className='singlegallery'>
        <img src='/images/claudine/01.png' className='absolute' />
        <img
          src='/images/mark/01.png'
          className={`absolute ${player === 0 ? 'none' : ''}`}
        />

        <img
          src='/images/claudine/01.png'
          className={player === 1 ? 'absolute2' : 'invisible2'}
          onClick={() => setPlayer(0)}
        />
        <img
          src='/images/mark/01.png'
          className={player === 0 ? 'absolute' : 'invisible'}
          onClick={() => setPlayer(1)}
        />
      </div>
    </section>
  );
}
