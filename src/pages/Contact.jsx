import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Bgimage2 from '../components/Bgimage2';
import Form  from '../components/Form';

const Contact = () => {
  return (
    <div>
       <Navbar/>
       <Bgimage2 heading="CONTACT." text="Lets have a Chat"/>
       <Form/>
       <Footer/>
    </div>
  )
}

export default Contact