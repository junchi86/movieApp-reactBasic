import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Movie.css'

function Movie({ year, title, summary, poster, genres, trailer }) {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: `/movie-detail/${trailer}`,
                    state: {
                        year,
                        title,
                        summary,
                        poster,
                        genres,
                        trailer
                    }
                }}
            >
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
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired,
    trailer: PropTypes.string.isRequired
}

export default Movie







