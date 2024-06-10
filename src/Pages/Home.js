import React from 'react';

import Header from '../Header.js';
import Nav from '../Nav.js';
import Highlights from '../Highlights.js';
import Testimonials from '../Testimonials.js';
import About from '../About.js'
import Footer from '../Footer.js';

const Home = () =>{
    return (
        <React.Fragment>
        <main className='main'>
          <section id='home'>
            <Header/>
          </section>
          <section id='menu'>
            <Highlights/>
          </section>
          <section id='reviews'>
            <Testimonials/>
          </section>
          <section id='about'>
            <About/>
          </section>
        </main>
        <section id='footer'>
            <Footer/>
        </section>
      </React.Fragment>
    )
}

export default Home;