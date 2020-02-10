import React from 'react'
import axios from 'axios'
import Movie from './Movie'


class MovieHome extends React.Component {
  state = {
    isLoading:true,
    movies:[]
  }

  getMovie= async ()=>{
    const {data:{data:{movies}}} = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
    this.setState({movies,isLoading:false})
  }
  componentDidMount(){
    this.getMovie()
  }
  render(){
    const {isLoading,movies} = this.state
    
    return(
      <div>
          {isLoading?'loading':movies.map(i=>(<Movie key={i.id} title={i.title} summary={i.summary} poster={i.medium_cover_image} year={i.year} genre={i.genres} trailer={i.yt_trailer_code}/>))}
      </div>
    )
  }
}

export default MovieHome;
