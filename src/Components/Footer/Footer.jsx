import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="waves">
        <div className="wave" id='wave1'></div>
        <div className="wave" id='wave2'></div>
        <div className="wave" id='wave3'></div>
        <div className="wave" id='wave4'></div>
      </div>
        <ul className='social-icon'>
          <li>
            <a href=""> 
              <FontAwesomeIcon icon={faFacebook} /> 
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </li>  
        </ul>
        <ul className="menu">
          <li><a href="">Inicio</a></li>
          <li><a href="">Acerca de</a></li>
          <li><a href="">Portafolio</a></li>
          <li><a href="">Equipo</a></li>
          <li><a href="">Contacto </a></li>
        </ul>
        <p>©2022 Wulune Productions | Todos los derechos reservados</p>
    </footer>
  )
}

export default Footer