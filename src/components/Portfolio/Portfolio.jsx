import React from 'react'
import './portfolio.css'
import Project from '../../Pictures/project practice.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>

      <div clssName="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={Project} alt="" />
          </div>
        <h4>Portfolio item title</h4>
      <a href="https://github.com/rethabilemore" className="btn">Github</a>
        </article>
       
    </div>
    </section>

    
  )
}

export default Portfolio
