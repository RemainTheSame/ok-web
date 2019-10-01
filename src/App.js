import React from 'react';

import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import BlogList from "./components/BlogList";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Games from "./components/Games";
import About from "./components/About";
import Web from "./components/Web";

function App() {
  return (
      <Router>
          <div className="App">
              <Header/>
              <Route exact path={"/"} component={Main}/>
              <Route path={"/about"} component={About}/>
              <Route path={"/games"} component={Games}/>
              <Route path={"/web"} component={Web}/>
              <BlogList/>
          </div>
      </Router>

  );
}

export default App;
