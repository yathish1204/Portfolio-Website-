import React,{useRef} from 'react'
import './Contact.css'
import adobe_img from '../../Assets/Adobe.png'
import google from '../../Assets/google.png'
import ms_png from '../../Assets/microsoft.png'
import info_img from '../../Assets/infosys.png'
import linked_icon from '../../Assets/linkedin.svg'
import insta_icon from '../../Assets/insta.svg'
import git_icon from '../../Assets/github.svg'
import behance_icon from '../../Assets/behance.svg'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_7748ewr', 'template_p3xn3xr', form.current, {
            publicKey: 'VDH9dviqQsHfzFw9znkAK',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <section className="contact-page">
        <div id="clients">
            <h1 className="contact-page-title">My Clients</h1>
            <p className="client-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestiae corrupti labore.
            </p>
        </div>
        <div className="clientImgs">
            <img src={adobe_img} alt="" className="clientImg" />
            <img src={google} alt="" className="clientImg" />
            <img src={ms_png} alt="" className="clientImg" />
            <img src={info_img} alt="" className="clientImg" />
        </div>
        <div id="contact">
            <h1 className="contact-page-title">Contact Me</h1>
            <span className="contactDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, voluptatibus. Cum, adipisci.</span>
            <form ref={form} className="contactForm" onSubmit={sendEmail}>
                <input type="text" name='your_name' className="name" placeholder='Your name' />
                <input type="email" name='your_email'  className="emai" placeholder='Your email id'/>
                <textarea className='msg' name="message" rows={5} placeholder='Your message'></textarea>
                <button className="submit-btn" type='submit' value='Send'>Submit</button>
                <div className="links">
                    <img loading="lazy" src={linked_icon} alt='Socialmedia_icons' className="link" />
                    <img loading="lazy" src={git_icon} alt='Socialmedia_icons' className="link" />
                    <img loading="lazy" src={behance_icon} alt='Socialmedia_icons' className="link" />
                    <img loading="lazy" src={insta_icon} alt='Socialmedia_icons' className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
