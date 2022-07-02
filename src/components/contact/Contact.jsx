import React, { useRef } from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ece6uap', 'template_7qdlnno', form.current, '2nFZ32oUZ6G5oO5tL')

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>grahamori@yahoo.co.uk</h5>
            <a href="mailto:grahamori@yahoo.co.uk" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineLinkedin className="contact__option-icon"/>
            <h4>LinkedIn</h4>
            <h5>My LinkedIn</h5>
            <a href="https://www.linkedin.com/in/graham-ori-thomas-21b23273/" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>07801323173</h5>
            <a href="https://wa.me/+447801323173" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact