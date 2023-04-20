import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Bgimage2 from '../components/Bgimage2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
       <Navbar/>
       <Bgimage2 heading="About." text="I'm a Full Stack Devloper"/>
       <AboutContent/>
       <Footer/>
    </div>
  )
}

export default About