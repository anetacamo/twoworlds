export default function Video({ player, setPlayer, large, open }) {
  return (
    <div
      className={`videogallery ${large ? (open ? 'large' : 'hidden') : ''} ${
        player === 0 ? 'border-teal' : 'border-orange'
      }`}
    >
      <video src='/video/claudine_sm.mp4' className='absolute' autoPlay muted />
      <video
        src='/video/mark_sm.mp4'
        className={`absolute ${player === 0 ? 'none' : ''}`}
        autoPlay
        muted
      />

      <video
        src='/video/claudine_sm.mp4'
        className={`opacity-toggle ${
          player === 1 ? 'absolute2' : 'invisible2'
        }`}
        autoPlay
        muted
        onClick={() => {
          setPlayer(0);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            setPlayer(0);
          }
        }}
        role='button'
        tabIndex='0'
      />
      <video
        src='/video/mark_sm.mp4'
        className={`opacity-toggle ${player === 0 ? 'absolute' : 'invisible'}`}
        autoPlay
        muted
        onClick={() => {
          setPlayer(1);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            setPlayer(1);
          }
        }}
        role='button'
        tabIndex='0'
      />
    </div>
  );
}
