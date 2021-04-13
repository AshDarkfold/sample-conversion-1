import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/icon.svg'
import hamburger from '../assets/hamburger.svg'
import hamwhite from '../assets/menu-white.svg'
export default function Nav() {

  const [isMobile, setMobile] = useState(false)
  const [isActive, setActive] = useState(false)

  const menuRef = useRef()

  useEffect(() => {
    window.addEventListener('resize', () => {
      if(window.innerWidth < 1100){
        setMobile(true)
      }else{
        setMobile(false)
      }
    }) 
    if(window.innerWidth < 1100){
      setMobile(true)
    }else{
      setMobile(false)
    }
    return () => {
      window.removeEventListener('resize', ()=>{})
    }
  }, [])

  const handleMenu = () => {
    if(isActive){
      menuRef.current.style.height = 0;
      menuRef.current.style.opacity = 0;
      setActive(false)
    } else{
      setActive(true)
      menuRef.current.style.height = '275px';
      menuRef.current.style.opacity = 1;
    }
  }

  return (
    <nav>
      <div className="nav-left">
        <img src={logo} alt="logo" />
        <span style={{color:isActive?'#fff':'#000'}}>Trafalgar</span>
      </div>
      { isMobile?
        <img onClick={handleMenu} className="menu-btn" src={!isActive?hamburger:hamwhite} alt="menu" />
        :
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
      }
      <ul ref={menuRef} className="nav-mob">
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