import React from 'react'
import './About.css'
import { BsAwardFill } from 'react-icons/bs'
import { AiFillFolderOpen } from 'react-icons/ai'
import { FcDiploma1 } from 'react-icons/fc'
import Nosotros from '../../Nosotros' 

const About = () => {
  return (
    <section id='about'>
      <h5>Conocenos</h5>
      <h2>Acerca de nosotros</h2>

      {
        Nosotros.map((index, key) => {
          return(
            <div className="container about__container">
              <div className="about__me">
                <div className="about__me-image">
                  <img src={index.Imagen} alt={index.Nombre} />
                </div>
              </div>

              <div className="about__content">
                <div className="about__cards">
                  <article className="about__card">
                    <BsAwardFill className='about__icon' />
                    <h5>Experiencia</h5>
                    <small>{index.Experiencia}</small>
                  </article>

                  <article className="about__card">
                    <AiFillFolderOpen className='about__icon' />
                    <h5>Proyectos</h5>
                    <small>{index.Proyectos}</small>
                  </article>

                  <article className="about__card">
                    <FcDiploma1 className='about__icon' />
                    <h5>Titulo</h5>
                    <small>{index.Titulo}</small>
                  </article>
                </div>

                <p>{index.Descripcion}</p>

                <a href="#contact" className='btn btn-primary'>Conversemos</a>
              </div>
            </div>
          )
        })
      }
    </section>
  )
}

export default About