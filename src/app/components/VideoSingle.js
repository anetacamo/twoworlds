export default function VideoSingle({ player, video }) {
  return (
    <div
      className={`videogallery ${
        player === "mark" ? "border-teal" : "border-orange"
      }`}
    >
      {/* <video
        src={`/video/${player}_sm.mp4`}
        className='absolute'
        autoPlay
        muted
      /> */}
      <iframe
        width="100%"
        style={{ borderRadius: 5 }}
        height="100%"
        src={video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}
