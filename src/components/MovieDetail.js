import { Link } from "react-router-dom";

function MovieDetail({ title, img, rating, genres, desc }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={img} alt="poster" />
      <ul>
        <li>Rate: {rating}</li>
        <li>Genres: {genres}</li>
      </ul>
      <ul>Description: {desc}</ul>
      <br />
      <hr />
      <h3>
        <Link to={process.env.PUBLIC_URL + "/"}>Click To Go Back Homepage</Link>
      </h3>
    </div>
  );
}

export default MovieDetail;
