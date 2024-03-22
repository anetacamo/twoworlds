export default function Video({ player, setPlayer, large, open }) {
  return (
<<<<<<< HEAD
    <div className={`videogallery ${large ? (open ? 'large' : 'hidden') : ''}`}>
=======
    <div className='videogallery'>
>>>>>>> 3c1ee4f878ed6f822b0a41a5d4b4c9e67b398b16
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
          console.log('videoclicked');
          setPlayer(0);
        }}
      />
      <video
        src='/video/mark_sm.mp4'
        className={`opacity-toggle ${player === 0 ? 'absolute' : 'invisible'}`}
        autoPlay
        muted
        onClick={() => {
          console.log('videoclicked');
          setPlayer(1);
        }}
      />
    </div>
  );
}
