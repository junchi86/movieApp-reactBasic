
import React from 'react'

function MovieDetail({ location }) {
    return (
        <div>
            <iframe title={location.state.title} width="1920" height="1080" src={`https://www.youtube.com/embed/${location.state.trailer}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
    )
}

export default MovieDetail
