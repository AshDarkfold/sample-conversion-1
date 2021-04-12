import React from 'react'
import Card from '../Components/Card'
import { services } from '../data/data'

export default function Content() {
  return (
    <main>
      <h2>Our services</h2>
      <hr/>
      <p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
      {
        services.map(el => <Card data={el} />)
      }
    </main>
  )
}