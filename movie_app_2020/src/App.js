import React from 'react';
import {HashRouter as Router,Route} from 'react-router-dom'
import MovieHome from './Component/MovieHome';
import MovieDetail from './Component/MovieDetail';

function App() {
  return (
    <Router>
      <Route exact path='/' component={MovieHome}></Route>
      <Route path='/movie-detail/:trailer' component={MovieDetail}></Route>

    </Router>
  )
}

export default App
