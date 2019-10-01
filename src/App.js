import React from 'react';

import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import BlogList from "./components/BlogList";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <BlogList/>
    </div>
  );
}

export default App;
