import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hola! somos</h5>
            <h1>Wulune Productions</h1>
            <h5 className="text-light">Desarrolladores y Artistas</h5>
            <CTA />
            <HeaderSocial />
            <div className="me">
                <img src={"http://www.thejungleadventure.com/assets/images/noimage/noimage.png"} alt="" />
            </div>
            <a href="#contact" className='scroll__down'>Scrolea hacia abajo</a>
        </div>
    </header>
  )
}

export default Header