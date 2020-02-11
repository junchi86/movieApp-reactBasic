import React from 'react'
import axios from 'axios'
import Movie from './Movie'
import './MovieHome.css'
import {Spin,Icon} from 'antd'

class MovieHome extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }

  getMovie = async () => {
    const { data: { data: { movies } } } = await axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=rating`)
    this.setState({ movies, isLoading: false })}

  componentDidMount(){
    this.getMovie()
  }
  
  render() {
    const antIcon = <Icon type="loading" style={{ fontSize: 35 }} spin />
    const { isLoading, movies } = this.state
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader"> 
            <span className="loader__text">Loading...</span> <Spin indicator={antIcon} />
          </div>
         
        ) : (
            <div className="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.yt_trailer_code}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  trailer={movie.yt_trailer_code}
                  background={movie.background_image}
                />
              ))}
            </div>
          )}
      </section>
    );
  }
}
export default MovieHome;
