import React from 'react';
import "./AboutContent.css"
import { Link } from 'react-router-dom';
import react1 from '../assets/react1.jpg'
import react2 from '../assets/react2.webp'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet vero aliquam rem error doloremque voluptates veniam alias, atque eius animi odio voluptate corporis porro maiores, excepturi repellendus, eos placeat aspernatur.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} alt="react1" className='img'/>
                </div>
                <div className="img-stack bottom">
                    <img src={react2} alt="react2" className='img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent