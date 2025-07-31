import albums from "../data/Albums.js";

const Albums = () => (
  <div>
    <h2>Albums</h2>
    {albums.map((album) => (
      <div key={album.id} className="item-box">
        <p>{album.title}</p>
      </div>
    ))}
  </div>
);

export default Albums;