import React, { useRef } from 'react'
import './Contact.css'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { BsMessenger } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_c8rvoyj', 'template_cw5hm5u', form.current, 'egy5hF29kyDURzd19')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>A un toque de nosotros</h5>
      <h2>Contactanos</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <div className="contact__option">
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>aramirez_17@alu.uabcs.mx</h5>
            <a href="mailto:aramirez_17@alu.uabcs.mx" target={"_blank"}>Envia un mensaje</a>
          </div>

          <div className="contact__option">
            <BsMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Adan Ramirez</h5>
            <a href="https://m.me/KatzuneStarky" target={"_blank"}>Envia un mensaje</a>
          </div>

          <div className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+526123050906</h5>
            <a href="https://api.whatsapp.com/send?phone=+526123050906" target={"_blank"} >Envia un mensaje</a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nombre Completo' required />
          <input type="email" name='email' placeholder='Correo Electronico' required />
          <textarea name="message" rows="7" placeholder='Mensaje...' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact