import React from 'react';
import "./Bgimage.css";
import Introimg from "../assets/intro-bg.jpg";
import { Link } from 'react-router-dom';

const Bgimage = () => {
  return (
    <div className='bgImage'>
        <div className="mask">
            <img className='intro-img' src={Introimg} alt="Introimg" />
        </div>
        <div className="content">
            <p>HI, I'M A FREELANCER.</p>
            <h1>React Developer</h1>
            <Link to='/project' className='btn'>Projects</Link>
            <Link to='/contact' className='btn btn-light'>Contact</Link>
          </div>
    </div>
  )
}

export default Bgimage