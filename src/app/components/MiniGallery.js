export default function MiniGallery({ mark, claudine }) {
  return (
    <section>
      <div className='inner'>
        <div className='gallery'>
          <img src={`/images/claudine/${claudine}.png`} />
          <img src={`/images/mark/${mark}.png`} />
        </div>
      </div>
    </section>
  );
}
