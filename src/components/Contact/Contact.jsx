import React from 'react'
import './Contact.css'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {TbBrandTelegram} from 'react-icons/tb'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_47pfhc9', 'template_pqso0c8', form.current, 'a68NIudj_rxiASUPU')
  e.target.reset();
  };

  return (
    <section id='contact'>
       <h5>Get In Touch</h5>
       <h2>Contact Me</h2>

       <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMarkEmailUnread className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>monissam28@gmail.com</h5>
            <a href="mailto:monissam28@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <TbBrandTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@Mohammad_Monis</h5>
            <a href="https://web.telegram.org/k/"  target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <ImWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+917409556444</h5>
            <a href="https://api.whatsapp.com/send?phone=+917409556444"  target="_blank">Send a message</a>
          </article>
        </div>
        {/* End of Contact */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name Please' required />
          <input type="email" name='email' placeholder='Your Email Please'required />
          <textarea name="message" rows="7" placeholder='Your Message Please' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
       </div>
    </section>
  )
}

export default Contact