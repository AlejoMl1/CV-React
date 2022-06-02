import React from 'react';
import './Skill.css';


export default function Skill({source, alt, title,technology}) {
  return (
    <div className='main'>
        <h3>{title}</h3>
        <img src={source} alt={alt} title={title}/>
        {/* <h6>{technology}</h6> */}
    </div>
  )
}


