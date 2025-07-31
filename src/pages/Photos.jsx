import photos from "../data/Photos.js";

const Photos = () => (
  <div>
    <h2>Photos</h2>
    {photos.map((photo) => (
      <div key={photo.id} className="item-box">
        <img src={photo.thumbnailUrl} alt={photo.title} />
        <p>{photo.title}</p>
      </div>
    ))}
  </div>
);

export default Photos;
