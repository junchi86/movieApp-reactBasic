import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import MovieHome from './Component/MovieHome';
import MovieDetail from './Component/MovieDetail';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import Header from './Component/partials/Header';
import 'antd/dist/antd.css'
import About from './Component/About';
import MovieSearch from './Component/MovieSearch';

const GlobalStyle = createGlobalStyle`
     ${reset};
     a{
         text-decoration:none;
         color:inherit;
     }
     *{
         box-sizing:boerder-box;
     }
     body{
         font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
         font-size: 14px;
         background-color:transparent
     }
`


function App() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path='/' component={MovieHome}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route path='/movie-detail/:trailer' component={MovieDetail}></Route>
        <Route path='/search' component={MovieSearch}></Route>
        <Route path='/search/:value' component={MovieSearch}></Route>
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App
