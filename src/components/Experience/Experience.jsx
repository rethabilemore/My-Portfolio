import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>The Skils I Have</h5>
    <h2>My Experience</h2>

    <div className='container experience_container'>
      <div className='experience_Frontend'>
        <h3>Frontend Development</h3>
        <div className='experience_content'>
        <article className='experience_details'>
            <BsPatchCheckFill />
            <h4>HTML</h4>
            <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill />
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill />
            <h4>JavaSCRIPT</h4>
            <small className='text-light'>Basic</small>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill />
            <h4>REACT</h4>
            <small className='text-light'>Basic</small>
          </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience
