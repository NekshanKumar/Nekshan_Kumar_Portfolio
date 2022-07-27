import React  from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FiInstagram} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef }  from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_4ytw5cm', 'template_zlc5afe', form.current, 'tNgyy_SEh6nYfAF-c')
    e.target.reset()
};
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact</h2>

    <div className="container contact_container">
    <div className="contact_options">

      <article className="contact_option">
      <MdOutlineEmail className="contact_option-icon"/>
         <h4>Email</h4>
         <h5>vk5983451@gmail.com</h5>
         <a href="mailto:vk5983451@gmail.com" target="_blank"> Send The Message</a>
      </article>

      <article className="contact_option">
      <FiInstagram className="contact_option-icon"/>
         <h4>Instagram</h4>
         <h5>Niks Rajput</h5>
         <a href="https://m.me/niks_rajput_7/" target="_blank"> Send a message</a>
      </article>

      <article className="contact_option">
      <BsWhatsapp className="contact_option-icon"/>
         <h4>WhatsApp</h4>
         <h5>+919103250861</h5>
         <a href="https://api.whatsapp.com/send?phone=+9103250861" target="_blank"> Send The Message</a>
      </article>
    </div>
      {/*---END OF CONTACT OPTIONS----*/}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name='message' rows="7" placeholder='Your Message' required > </textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact