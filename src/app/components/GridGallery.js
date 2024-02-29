export default function GridGallery({ images }) {
  return (
    <section>
      <div className='inner'>
        <div className='gallery large-gallery grid-gallery'>
          {images.map((image, index) => (
            <div className='container' key={index}>
              <img src={`/images/mark/${image}.png`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
