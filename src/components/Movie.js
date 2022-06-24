import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, poster, title, year, summary, genres }) {
  return (
    <div>
      <img src={poster} alt="poster" />
      <h3>
        <Link to={`/movie/${id}`}>
          {title} ({year})
        </Link>
      </h3>
      <p>{summary}</p>
      <ul>{genres ? genres.map((g) => <li key={g}>{g}</li>) : null}</ul>
      <hr />
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
