import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7f76wk7', 'template_kdn7nw8', form.current, '7iT6qZ4L2kvu6iOSm')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        < section id='contact' >
            <br />
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contacts__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>gordxrohit@gmail</h5>
                        <a href="mailto:gordxrohit@gmail.com" target="_blank"> Send a message</a>
                    </article>

                    <article className="contact__option">
                        <BsLinkedin className='contact__option-icon' />
                        <h4> Linkedin </h4>
                        <h5> Rohit Kumar Mandal</h5>
                        <a href="https://www.linkedin.com/in/gordxrohit/" target="_blank"> Send a message</a>
                    </article>

                    <article className="contact__option">
                        <BsInstagram className='contact__option-icon' />
                        <h4>Instagram</h4>
                        <h5>ig.gordxrohit</h5>
                        <a href="https://www.instagram.com/ig.gordxrohit/" target="_blank"> Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='name' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section >
    )
}



export default Contact