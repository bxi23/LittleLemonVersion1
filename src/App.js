import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Head from './Head.js';
import Nav from './Nav.js';

import Home from './Pages/Home.js';
import Reserve from './Pages/Reservations.js';




function App() {
  return (
    <Router>
       <Head/>
       <section id='nav'>
          <Nav/>
      </section>
       <Routes>
          <Route exact path="/" element={
            <Home/>
          }/>
          <Route exact path="/reserve" element={
            <Reserve/>
          }/>
       </Routes>
    </Router>
  );
}

export default App;
