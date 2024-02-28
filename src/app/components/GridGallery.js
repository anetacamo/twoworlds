export default function GridGallery({ images }) {
  return (
    <section>
      <div className='inner'>
        <div className='gallery large-gallery grid-gallery'>
          {images.map((image) => (
            <div className='container'>
              <img src={`/images/mark/${image}.png`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
