import React from 'react'
import logo from '../assets/logo-white.svg'

export default function Footer() {
  return (
    <footer>
      <section>
        <div className="footer-title">
          <img src={logo} alt="logo" />
          <span>Trafalgar</span>
        </div>
        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
        </p>
        <p style={{marginTop:"50px"}}>
          ©Trafalgar PTY LTD 2020. All rights reserved
        </p>
      </section>
      <section>
        <h3>
          Company
        </h3>
        <p>About</p>
        <p>Testimonials</p>
        <p>Find a doctor</p>
        <p>Apps</p>
      </section>
      <section>
        <h3>
          Region
        </h3>
        <p>Indonesia</p>
        <p>Singapore</p>
        <p>Hongkong</p>
        <p>Canada</p>
      </section>
      <section>
        <h3>
          Help
        </h3>
        <p>Help Center</p>
        <p>Contact Support</p>
        <p>Instructions</p>
        <p>How it works</p>
      </section>
    </footer>
  )
}