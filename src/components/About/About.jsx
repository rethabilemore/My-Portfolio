import React from 'react'
import './about.css'
import MOGURL from '../../Pictures/mogurl.jpg'
import {MdOutlineWork} from 'react-icons/md'
import {FcFolder} from 'react-icons/fc'

const About = () => {
  return (
    <section id='about'>
    <h5>Get to know</h5>
    <h2>About Me</h2>

    <div className='container about_container'>
      <div className='about_me'>
        <div className='about_me-image'>
          <img src={MOGURL} alt='' />
        </div>
      </div>

      <div className='about_content'>
        <div className='about_cards'>
          <article className='about_card'>
            <MdOutlineWork className='about_icon'/>
            <h5>Experience</h5>
            <small>0 working years(new)</small>
          </article>
          <article className='about_card'>
            <FcFolder className='about_icon'/>
            <h5>Projects</h5>
            <small>2 completed</small>
          </article> 
        </div>

        <p>
          I aspire to impact the world in a positive way and bring liftime solutions through technology. Build codes that will solve present problems, and still be relevent in future. Serve as an initial touch point for young people who will eventually participate in Africa's technology and ecosystem.
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About


