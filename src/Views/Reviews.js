import React, { useRef, useState } from 'react'
import {reviews} from '../data/data'
import arrow from '../assets/arrow.svg'

export default function Reviews() {
  const [ind, setInd] = useState(0)
  const revRef = useRef()

  const setIndCorr = (num) => {
    if(num >= 0 && num < reviews.length){ 
      revRef.current.style.opacity = 0
      setTimeout(() => {
        setInd(num)
      revRef.current.style.opacity = 1
      }, 301)
      
    }
  }

  return (
    <section className="reviews-parent">
      <div className="reviews-container">
        <h2>What our customers are saying</h2>
        <hr/>
        <div className="review" ref={revRef}>
          <img src={reviews[ind].img} alt=""/>
          <div>
            <p>{reviews[ind].name}</p>
            <span>{reviews[ind].position}</span>
          </div>
          <p>"{reviews[ind].review}"</p>
        </div>
      </div>

      <div className="review-nav">
        <img onClick={() => setIndCorr(ind-1)} className={`revnav-btn revleft ${ind===0?"revnav-dis":""}`} src={arrow} alt=""/>
        <div className="dot-holder">
          {
            reviews.map((el,i) => {
              return (
                <span key={i} className={`dot ${i === ind?"dot-active":""}`} />
              )
            })
          }
        </div>
        <img onClick={() => setIndCorr(ind+1)} className={`revnav-btn ${ind===(reviews.length-1)?"revnav-dis":""}`} src={arrow} alt=""/>
      </div>
    </section>
  )
}