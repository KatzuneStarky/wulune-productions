import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import videoPrueba from '../../Private/VideoPrivate/videoPrueba.mp4'
import splash from '../../Private/private_images/mask.jpg'
import './Landing.css'

const Landing = () => {

  return (
    <>
        <header>        
            <a href="#" className="logo"></a>
            <div className="rightSide">            
                <div className="btns dayNight">
                    <FontAwesomeIcon icon={faMoon} className='iconD' />
                    <FontAwesomeIcon icon={faCloudSun} className='iconD' />
                </div>
            </div>
        </header>
        <section className='main'>
            <video src={videoPrueba} autoPlay loop muted></video>
            <img src={splash} alt="" className='mask' />
            <h1>Wulune Productions</h1>
            <p className='copoyrightText'>©2022 Wulune Productions | Todos los derechos reservados</p>
        </section>
    </>
  )
}

export default Landing