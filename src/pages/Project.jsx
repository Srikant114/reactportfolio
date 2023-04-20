import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Bgimage2 from '../components/Bgimage2';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
       <Navbar/>
       <Bgimage2 heading="PROJECTS." text="My Recent Works"/>
       <Work/>
       <PricingCard/>
       <Footer/>
    </div>
  )
}

export default Project