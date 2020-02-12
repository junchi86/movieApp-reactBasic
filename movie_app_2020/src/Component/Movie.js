import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Movie.css'
import {Card} from 'antd'

function Movie({ year, title, summary, poster, genres, trailer,background }) {
    return (
        <Link
                to={{
                    pathname: `/movie-detail/${trailer}`,
                    state: {
                        year,
                        title,
                        summary,
                        poster,
                        genres,
                        trailer,
                        background
                    }
                }}
            >
        <Card
            key={trailer}
            className = 'movie'
            hoverable
            cover={<img src={poster} alt={title} title={title} />}
        >
            <Card.Meta title={title + year} description={summary.slice(0, 140)+'...'} />
        </Card></Link>       
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    trailer: PropTypes.string.isRequired
}

export default Movie


