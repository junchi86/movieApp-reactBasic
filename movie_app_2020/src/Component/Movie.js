import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function Movie ({title,summary,poster,year,genre,trailer}) {
    console.log(trailer)
    return (
        <div>
            <h4>title:{title} genre:{genre} year:{year}</h4>
            <h4>summary:{summary}</h4>
            <img height="315" src={poster} alt='img'/>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    genre:PropTypes.string.isRequired,
    trailer:PropTypes.string.isRequired
}

export default Movie







