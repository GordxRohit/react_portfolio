import React from 'react'
import './portfolio.css'
import YoutubeMusic from '../../assets/YoutubeMusic.jpg'
import StrangerThings from '../../assets/StrangerThings.jpg'
import whatsapp from '../../assets/whatsapp.jpg'
import foodApp from '../../assets/foodApp.jpg'

const data = [
    {
        id: 1,
        image: YoutubeMusic,
        title: 'Youtube Music App UI',
        resources: 'https://www.figma.com/file/72SBuNEeTiaghsnblqJ1Sp/Youtube-Music-App-UI-Design?node-id=0%3A1&t=NA49tM86bfEOh1Nl-1',
        demo: 'https://www.figma.com/proto/72SBuNEeTiaghsnblqJ1Sp/Youtube-Music-App-UI-Design?page-id=0%3A1&node-id=0%3A3&viewport=408%2C303%2C0.25&scaling=scale-down'
    },
    {
        id: 2,
        image: StrangerThings,
        title: 'Carousel Slider',
        resources: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 3,
        image: whatsapp,
        title: 'whatsapp App UI',
        resources: 'https://www.figma.com/file/BW7efCBOubG8pZCwr9OweE/Whatsapp?node-id=0%3A1&t=wKkX8TNSWRYWSeJk-1',
        demo: 'https://www.figma.com/proto/BW7efCBOubG8pZCwr9OweE/Whatsapp?page-id=0%3A1&node-id=2%3A2&viewport=164%2C301%2C0.23&scaling=scale-down&starting-point-node-id=2%3A2'
    },
    {
        id: 4,
        image: foodApp,
        title: 'Food App UI',
        resources: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 5,
        image: YoutubeMusic,
        title: 'Youtube Music App UI',
        resources: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 6,
        image: StrangerThings,
        title: 'Youtube Music App UI',
        resources: 'https://github.com',
        demo: 'https://github.com'
    }
]

function portfolio() {
    return (
        <section id='portfolio'>
            <br />
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {data.map(({ id, image, title, resources, demo }) => {
                    return (
                        <article key={id} className='portfolio__item'>
                            <div className='portfolio__item-image'>
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio__item-cta'>
                                <a href={resources} className='btn' target='_blank'>Resources</a>
                                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default portfolio