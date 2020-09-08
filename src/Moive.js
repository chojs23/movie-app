import React, { uesRef } from 'react';
import propTypes from 'prop-types';
import './Movie.css';

const moreBtn = document.getElementById('summary__moreBtn');
const summary = document.getElementById('summary');

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <div className="movie__summary">
          <div className="summary" id="summary">
            {summary}
          </div>
          <button className="summary__more" id="summary__moreBtn">
            ...
          </button>
        </div>
      </div>
    </div>
  );
}
Movie.propTypes = {
  id: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};
export default Movie;
