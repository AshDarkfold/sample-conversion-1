import React from 'react'
import arrow from '../assets/arrow.svg'

export default function Card({data}) {
  return (
    <div className="card">  
      <div className={`card-body ${data.link?"card-body-full":""}`}>
        <img className={data.link?"card-img-full":""} src={data.icon} alt={data.name}/>
        <h3>{data.name}</h3>
        <span>{data.desc}</span>
        {
          data.link && <a href={data.link}>Read more <img src={arrow} alt="read more" /></a>
        }
      </div>
    </div>
  )
}