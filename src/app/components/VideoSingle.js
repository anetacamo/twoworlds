export default function VideoSingle({ player }) {
  return (
    <div className='videogallery'>
      <video
        src={`/video/${player}_sm.mp4`}
        className='absolute'
        autoPlay
        muted
      />

      {/* 
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
      /> */}
    </div>
  );
}
