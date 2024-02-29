export default function Gallery({ images }) {
  return (
    <section>
      <div className='inner'>
        <div className='gallery large-gallery'>
          {images.map((image, index) => (
            <img src={`/images/claudine/${image}.png`} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
