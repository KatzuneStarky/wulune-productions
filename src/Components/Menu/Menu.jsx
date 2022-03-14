import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCircleExclamation, faBriefcase, faUsers, faMessage, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Menu.css'

const Menu = () => {
    useEffect(() => {
        let menuToggle = document.querySelector('.toggle')
        let navigation = document.querySelector('.navigation')
        menuToggle.onclick = function(){
            menuToggle.classList.toggle('active')
            navigation.classList.toggle('active')
        }

        let list = document.querySelectorAll('.list')
        for(let i=0; i < list.length; i++){
            list[i].onclick = function(){
                let j = 0
                while(j < list.length){
                    list[j++].className = 'list'
                }
                list[i].className = 'list active'
            }
        }
    }, [])
  return (
    <>
        <div className="navigation">
            <ul>
                <li className="list active">
                    <b></b>
                    <b></b>
                    <a href="#">
                        <span className='icon'><FontAwesomeIcon icon={faHouse} style={{fontSize: '1.5em'}} /></span>
                        <span className='title'>Inicio</span>
                    </a>
                </li>

                <li className="list">
                    <b></b>
                    <b></b>
                    <a href="#">
                        <span className='icon'><FontAwesomeIcon icon={faCircleExclamation} style={{fontSize: '1.5em', transition: '0.5s'}} /></span>
                        <span className='title'>Acerca de</span>
                    </a>
                </li>

                <li className="list">
                    <b></b>
                    <b></b>
                    <a href="#">
                        <span className='icon'><FontAwesomeIcon icon={faBriefcase} style={{fontSize: '1.5em', transition: '0.5s'}} /></span>
                        <span className='title'>Portafolio</span>
                    </a>
                </li>

                <li className="list">
                    <b></b>
                    <b></b>
                    <a href="#">
                        <span className='icon'><FontAwesomeIcon icon={faUsers} style={{fontSize: '1.5em', transition: '0.5s'}} /></span>
                        <span className='title'>Equipo</span>
                    </a>
                </li>

                <li className="list">
                    <b></b>
                    <b></b>
                    <a href="#">
                        <span className='icon'><FontAwesomeIcon icon={faMessage} style={{fontSize: '1.5em', transition: '0.5s'}} /></span>
                        <span className='title'>Contacto</span>
                    </a>
                </li>
            </ul>   
        </div>
        <div className="toggle">
            <FontAwesomeIcon icon={faBars} className='iconF open' />
            <FontAwesomeIcon icon={faXmark} className='iconF close' />
        </div>
    </>
  )
}

export default Menu