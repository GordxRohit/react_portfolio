import React from 'react'
import './footer.css'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Gord X Rohit</a>
            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Experience</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Portfolio</a></li>
                <li><a href='#'>Testimonials</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href="https://www.instagram.com/ig.gordxrohit/" target="_blank"><BsInstagram /></a>
                <a href="https://www.linkedin.com/in/gordxrohit/" target="_blank"> <BsLinkedin /></a>
            </div>
            <div className='footer__copyright'>
                <small>&copy; GordxRohit . All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer