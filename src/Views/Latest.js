import React from 'react'
import Button from '../Components/Button'
import Card from '../Components/Card'
import { latest } from '../data/data'

export default function Latest() {
  return (
    <main>
      <h2>Check out our latest articles</h2>
      <hr/>
      <div className="card-container">
        {
          latest.map((el,i) => <Card key={i} data={el} />)
        }
      </div>
      <Button style={{marginTop:'50px'}} filled={false}>Learn More</Button>
    </main>
  )
}