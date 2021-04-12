import React from 'react'
import heroImg from '../assets/herbox-illus.svg'
import Button from '../Components/Button'

export default function HeroBox() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>
          Virtual healthcare<br/>for you
        </h1>
        <span>
        Trafalgar provides progressive, and affordable<br/>
        healthcare, accessible on mobile and online<br/>
        for everyone
        </span>
        <Button style={{marginTop:'40px'}} filled={true}>
          Consult Today
        </Button>
      </div>
      <div className="hero-right">
        <img src={heroImg} alt="2 Men talking in front of heart"/>
      </div>
    </div>
  )
}