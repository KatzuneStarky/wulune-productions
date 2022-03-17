import React from 'react'
import './Footer.css'
import { AiFillFacebook, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'
import { FaDeviantart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Wulune Productions</a>
      <ul className="permalinks">
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Acerca de</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#portfolio">Portafolio</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__socials">
        <a href=""><AiFillFacebook /></a>
        <a href=""><AiFillTwitterCircle /></a>
        <a href=""><AiFillGithub /></a>
        <a href=""><FaDeviantart /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Wulune Productions. Todos los derechos reservados</small>
      </div>
    </footer>
  )
}

export default Footer