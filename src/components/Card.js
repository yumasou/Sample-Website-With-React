import React from 'react'
import CardItem from './CardItem'
function Card() {
  return (
  <div className='container-fluid bg-light'>
    <div className='row bg-light text-center'><h1 className='pt-5'>Check out these EPIC Destinations!</h1></div>
     <div className='row container bg-light mx-auto'>
      <CardItem src='images/img-9.jpg' status="Adventure" text="Explore the hidden waterfall deep inside the Amazon jungle" />
      <CardItem src='images/img-2.jpg' status="Luxury" text="Travel through the Islands of Bali in the Private Cruise" />
    </div>
    <div className='row container bg-light mx-auto'>
    <CardItem src='images/img-3.jpg' status="Mystery" text="Set Sail in the Atlantic Ocean Visiting Uncharted Waters"   />
    <CardItem src='images/img-4.jpg' status="Adventure" text="Experience Football on top of the Himilayan Mounains" />
    <CardItem src='images/img-8.jpg'  status="Andrenaline" text="Ride through the Sahara Desert on the guided camel tour"/>
  </div>
  </div>
  )
}

export default Card
