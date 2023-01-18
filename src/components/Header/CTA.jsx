import React from 'react'
import CV from '../../Pictures/cv.pdf'
import CoverPage from '../../Pictures/Cover page.pdf'


const CTA = () => {
  return (
    <div className= 'cta'>
      <a href={CoverPage} download className='btn'>Download CoverPage</a>  
      <a href={CV} download className='Btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA
