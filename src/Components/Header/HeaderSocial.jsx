import React from 'react'
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';


const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="" target={"_blank"}> <BsLinkedin /> </a>
        <a href="" target={"_blank"}> <BsGithub /> </a>
        <a href="" target={"_blank"}> <BsFacebook /> </a>
    </div>
  )
}

export default HeaderSocial