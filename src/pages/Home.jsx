import React from 'react'
import Navbar from '../components/Navbar'
import Bgimage from '../components/Bgimage'
import Footer from '../components/Footer'
import Work from "../components/Work"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Bgimage/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home