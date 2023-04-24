import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons'
import './Herosection.css'
function Herosection() {
  return (
    <div className='video-container'>
      <video src="./videos/video-1.mp4"  autoPlay loop muted />
      <h1 className='text-light my-5'>ADVENTURE AWAITS</h1>
      <p className='text-light h4 my-3'>What are you waiting for ?</p>
      <div className='btn-lg-group my-5 d-flex flex-column '>
        <Link to="/demo" className='btn btn-outline-success my-3'>GET STARTED</Link>
        <Link to='/demo' className='btn btn-light my-4'>WATCH TRAILER <FontAwesomeIcon icon={faCirclePlay} /></Link>
      </div>
    </div>
  )
}

export default Herosection
