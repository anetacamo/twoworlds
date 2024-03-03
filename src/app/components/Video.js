export default function Video({ player, setPlayer }) {
  return (
    <div className='videogallery'>
      <video
        src='/video/claudine_sm.mp4'
        className='absolute'
        // onClick={() => {
        //   console.log('videoclicked');
        //   setPlayer(0);
        // }}
        autoPlay
        muted
      />
      <video
        src='/video/mark_sm.mp4'
        className={`absolute ${player === 0 ? 'none' : ''}`}
        // onClick={() => {
        //   console.log('videoclicked');
        //   setPlayer(1);
        // }}
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
