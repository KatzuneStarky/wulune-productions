import React, { useEffect } from 'react'
import Landing from '../../Components/Landing/Landing'

const HomePage = () => {
  useEffect(() => {
    let dayNight = document.querySelector('.dayNight')
    let body = document.querySelector('body')

    dayNight.onclick = function(){
        body.classList.toggle('dark')
        dayNight.classList.toggle('active')
    }
}, [])
  return (
    <>
      <Landing />
    </>
  )
}

export default HomePage