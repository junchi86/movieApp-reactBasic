import React from 'react';
import { HashRouter as Router, Route,Switch } from 'react-router-dom'
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
         background:lightgray
     }
`


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/search/:value' component={MovieSearch}></Route>
          <Route exact path='/' component={MovieHome}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route path='/movie-detail/:trailer' component={MovieDetail}></Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App
