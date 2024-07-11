import "./Gallery.scss";

const Gallery = ({ photos }) => {
  return (
    <div className="bento-grid">
      {photos.map((photo, index) => (
        <div key={index} className="bento-grid__item">
          <img className="bento-grid__img" src={photo.url} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
