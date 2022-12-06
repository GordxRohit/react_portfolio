import React from 'react'
import './testimonials.css'
import dp from '../../assets/dp.jpg'

import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
    {
        avatar: dp,
        name: 'Youtube Music App UI',
        review: 'hello everyone this is most useful project'
    },
    {
        avatar: dp,
        name: 'Youtube Music App UI',
        review: 'hello everyone this is most useful project '
    },
    {
        avatar: dp,
        name: 'Youtube Music App UI',
        review: 'hello everyone this is most useful project'
    },
]


const Testimonials = () => {
    return (
        <section id='testimonials'>
            <br />
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                modules={[Navigation, Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                navigation={{ clickable: true }}
                pagination={{ clickable: true }}>
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className='client__avatar'>
                                    <img src={avatar} alt={name}
                                    />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials