import React from 'react'
import './services.css'
import { BsPatchCheck } from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <br />
            <h5>What I offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>
                            UI/UX Design
                        </h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsPatchCheck className='service__list-icon' />
                            <p>springboard.com has been visited by 10K+ users in the past month
                            </p>
                        </li>
                        <li>
                            <BsPatchCheck className='service__list-icon' />
                            <p>springboard.com has been visited by 10K+ users in the past month
                            </p>
                        </li>
                        <li>
                            <BsPatchCheck className='service__list-icon' />
                            <p>springboard.com has been visited by 10K+ users in the past month
                            </p>
                        </li>
                        <li>
                            <BsPatchCheck className='service__list-icon' />
                            <p>springboard.com has been visited by 10K+ users in the past month
                            </p>
                        </li>

                    </ul>
                </article>
                {/* web development */}
                <article className="service">
                    <div className="service__head">
                        <h3>
                            Web Development
                        </h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsPatchCheck className='service__list-icon' />
                            <p>springboard.com has been visited by 10K+ users in the past month
                            </p>
                        </li>
                        <li>
                            <BsPatchCheck className='service__list-icon' />
                            <p>springboard.com has been visited by 10K+ users in the past month
                            </p>
                        </li>
                        <li>
                            <BsPatchCheck className='service__list-icon' />
                            <p>springboard.com has been visited by 10K+ users in the past month
                            </p>
                        </li>
                        <li>
                            <BsPatchCheck className='service__list-icon' />
                            <p>springboard.com has been visited by 10K+ users in the past month
                            </p>
                        </li>
                        <li>
                            <BsPatchCheck className='service__list-icon' />
                            <p>springboard.com has been visited by 10K+ users in the past month
                            </p>
                        </li>
                    </ul>
                </article>
                {/*content creation*/}
                <article className="service">
                    <div className="service__head">
                        <h3>
                            Content Creation
                        </h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsPatchCheck className='service__list-icon' />
                            <p>springboard.com has been visited by 10K+ users in the past month
                            </p>
                        </li>
                        <li>
                            <BsPatchCheck className='service__list-icon' />
                            <p>springboard.com has been visited by 10K+ users in the past month
                            </p>
                        </li>
                        <li>
                            <BsPatchCheck className='service__list-icon' />
                            <p>springboard.com has been visited by 10K+ users in the past month
                            </p>
                        </li>
                        <li>
                            <BsPatchCheck className='service__list-icon' />
                            <p>springboard.com has been visited by 10K+ users in the past month
                            </p>
                        </li>

                    </ul>
                </article>

            </div>
        </section>
    )
}

export default Services