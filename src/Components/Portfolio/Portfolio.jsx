import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Trabajos recientes</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="https://git.az/source/services/2/photo/original/web.jpg" alt="" />
          </div>
          <h3>Titulo del proyecto</h3>
          <div className="portfolio__item-cta">
            <a href="" className="btn">Github</a>
            <a href="" className="btn btn-primary">Ver</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio