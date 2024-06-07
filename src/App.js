import React from 'react';
import './App.css';

import Head from './Head.js';
import Header from './Header.js';
import Nav from './Nav.js';
import Highlights from './Highlights.js';
import Testimonials from './Testimonials.js';
import About from './About.js'
import Footer from './Footer.js';



function App() {
  return (
    <React.Fragment>
      <Head/>
      <Nav/>
      <main className='main'>
        <Header/>
        <Highlights/>
        <Testimonials/>
        <About/>
        <Footer/>
      </main>
      <footer className='footer'>

      </footer>
    </React.Fragment>

  );
}

export default App;
