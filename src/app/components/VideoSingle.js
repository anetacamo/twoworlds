export default function VideoSingle({ player }) {
  return (
    <div
      className={`videogallery ${
        player === 'mark' ? 'border-teal' : 'border-orange'
      }`}
    >
      <video
        src={`/video/${player}_sm.mp4`}
        className='absolute'
        autoPlay
        muted
      />
    </div>
  );
}
