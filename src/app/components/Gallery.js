export default function Gallery({ images }) {
  return (
    <section>
      <div className='inner'>
        <div className='gallery large-gallery'>
          {images.map((image) => (
            <img src={`/images/claudine/${image}.png`} />
          ))}
        </div>
      </div>
    </section>
  );
}
