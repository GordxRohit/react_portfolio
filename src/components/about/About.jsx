import React from 'react'
import './about.css'
import ME from '../../assets/dp.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2> About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Followers</h5>
                            <small>1500+</small>
                        </article>
                        <article className='about__card'>
                            <FaStar className='about__icon' />
                            <h5>2100+</h5>
                            <small>Stars</small>
                        </article>
                    </div>
                    <p> Hello I'm Rohit Kumar Mandal , Front-end Developer . Currently I'm Pursuing B.tech in CSE.</p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>

    )
}

export default About