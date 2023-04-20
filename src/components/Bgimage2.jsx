import React from 'react';
import "./Bgimage2.css";

const Bgimage2 = ({heading,text}) => {
  return (
    <div className='bg-image'>
        <div className="heading">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Bgimage2