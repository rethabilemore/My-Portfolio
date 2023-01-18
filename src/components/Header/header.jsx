import React from 'react'
import './header.css'
import CTA from './CTA'
import VEE from '../../Pictures/vee.jpg'

const header = () => {
  return (
    <header>
      <div className="containerheader_container">
        <h4>Hello I'm </h4>
        <h1>Rethabile Virginia More</h1>
        <h4 className="text-light">FrontEnd Developer</h4>
        <CTA />

        <div className="vee">
        <img src={VEE} alt="vee" />
        </div>

        <a href="Contact"  className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header