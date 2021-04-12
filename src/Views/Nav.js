import React from 'react'
import logo from '../assets/icon.svg'

export default function Nav() {
  return (
    <nav>
      <div className="nav-left">
        <img src={logo} alt="logo" />
        <span>Trafalgar</span>
      </div>
      <ul className="nav-right">
        <li className="nav-active">
          Home
        </li>
        <li>
          Find a doctor
        </li>
        <li>
          Apps
        </li>
        <li>
          Testimonials
        </li>
        <li>
          About Us
        </li>
      </ul>
    </nav>
  )
}