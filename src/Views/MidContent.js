import React from 'react'
import health from '../assets/leadhelth.svg'
import dwnld from '../assets/downmobile.svg'
import Button from '../Components/Button'

export default function MidContent() {
  return (
    <main>
      <div className="m-1">
        <img src={health} alt=""/>
        <div>
          <h2>Leading healthcare providers</h2>
          <hr/>
          <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
          <Button filled={false}>Learn More</Button>
        </div>
      </div>
      <div className="m-1 m-1-down">
        <div>
          <h2>Download our mobile apps</h2>
          <hr/>
          <p>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>
          <Button filled={false}>Learn More</Button>
        </div>
        <img src={dwnld} alt=""/>
      </div>
    </main>
  )
}