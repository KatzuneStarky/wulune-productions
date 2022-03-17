import React from 'react'
import './Experencie.css'
import Experiencia from '../../Experiencia'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      {
        Experiencia.map((index) => {
          return(
            <>
              <h5>{index.Nombre}: Cuales son mis habilidades</h5>
              <h2>Mi Experiencia</h2>

              <div className="container experiencie__container">
                <div className="experience__uno">
                  <h3>Desarrollo FrontEnd</h3>
                  <div className="experience__content">
                    <article className='experience__details'>
                      <AiOutlineCheckCircle className='experience__details-icon' />
                      <div>
                        <h4></h4>
                        <small className='text-light'></small>
                      </div>
                    </article>
                  </div>
                </div>

                <div className="experience__dos">
                  <h3>Desarrollo BackEnd</h3>
                    <div className="experience__content">
                      <article className='experience__details'>
                        <AiOutlineCheckCircle className='experience__details-icon' />
                        <div>
                        <h4></h4>
                        <small className='text-light'></small>
                      </div>
                      </article>
                    </div>
                </div>
              </div>
            </>
          )
        })
      }
    </section>
  )
}

export default Experience