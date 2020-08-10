import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer'
import Gallery from './Gallery'
import GalleryMain from './GalleryMain'
import ContentCard from './ContentCard'
import Advertisement from './Advertisement'
import {ReactComponent as ImgProject}  from '../assets/icons/teamwork.svg'
import {ReactComponent as ImgAid}  from '../assets/icons/heart.svg'
import {ReactComponent as ImgGuest}  from '../assets/icons/party.svg'
import DocConstitution from '../assets/docs/constitution.pdf'

const Home = (props) => {

    
    const [ homeItems, setHomeItems ] = useState([])
    const [ projectItems, setProjectItems ] = useState([])
    const [ aidItems, setAidItems ] = useState([])
    const [ eventItems, setEventItems ] = useState([])

    useEffect(() => {
        axios.all([
            axios.get(`http://${process.env.REACT_APP_HOST}:5000/articles/type/type=event&count=0`),
            axios.get(`http://${process.env.REACT_APP_HOST}:5000/articles/type/type=project&count=0`),
            axios.get(`http://${process.env.REACT_APP_HOST}:5000/articles/type/type=aid&count=0`),
            axios.get(`http://${process.env.REACT_APP_HOST}:5000/articles/type/type=event&count=0`),
        ])
        .then(axios.spread((latest, projects, aid, events) => {
            setHomeItems(latest.data)
            setProjectItems(projects.data)
            setAidItems(aid.data)
            setEventItems(events.data)
            console.log('latest', latest)
        }))
    }, [])

    const latestItems = []

    const latestProjects = []
    const latestAid = []
    const latestEvents = []

    for( let i=0; i<4; i++) {
        if (typeof homeItems[i] !== 'undefined') latestItems.push(<ContentCard key={i} content={homeItems[i]}/>)
        if (typeof projectItems[i] !== 'undefined') latestProjects.push(<ContentCard key={i} content={projectItems[i] }/>)
        if (typeof aidItems[i] !== 'undefined') latestAid.push(<ContentCard key={i} content={aidItems[i] }/>)
        if (typeof eventItems[i] !== 'undefined') latestEvents.push(<ContentCard key={i} content={eventItems[i]}/>)
             
    }

    return (
        <div className='home'>
                <Gallery/>                
            <div className='home__about fadeInUp'>
                <div className='home__container'>
                <h2 className='home__sub-title' data-aos="fade-down">Who are we?</h2>
                    <div className='home__about__content'>
                        <div className='home__about__details' data-aos="fade-up">
                            <img className='home__about__image' src='/assets/media/members/trustee/kk.png'></img>
                            <div className='home__about__text'>
                                <p className='home__text home__about__text--quote'>"The Peterborough Nepalese Society (PNS) is a non-profit making community based organisation established in 2007 with the initiation of all individuals or families originally coming from Nepal and those who are living in and around Peterborough areas."</p>                        
                                <p className='home__text home__about__text--note'> -Kiran Karki, Trustee Chair</p>         
                            </div>
                        </div>
                        <div className='home__about__links'>
                            <Link to='/about'>About Us</Link>
                            <Link to='/committee/type=management'>Managment</Link>
                            <Link to='/committee/type=trustee'>Trutee Board</Link>
                            <Link to='/committee/type=advisor'>Advisory Body</Link>
                            <a href={DocConstitution} target='_blank'>Constitution</a>
                            <Link className='' to='/minutes'>Meetings</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home__sections'>
                <div className='home__sections--left'>

                </div>
                <div className='home__sections--center'>
                    <div className='home__latest home__container'>
                        <h2 className='home__sub-title home__sub-title--section' data-aos="fade-down">Latest</h2>
                        <div className='home__latest__content'>
                            {latestItems}
                        </div>
                    </div>
                    <div className='section home__container'>
                        <div className='section__header' data-aos="fade-down">
                            <h2 className='section__title'>Projects</h2>
                            <div className='section__dot'></div>
                            <span className='section__count section__count--project'>{projectItems.length}</span>
                        </div>
                        <div className='section__content'>
                            <div className='section__content--left section__content--bring-front section__info section__info--project' data-aos="flip-left">
                                <div className='section-circle section-circle--projectt'></div>
                                <ImgProject className='section__image section__image--project'/>
                                <p className='section__info-text section__info-text--project'>We support projects that help the community.</p>
                                <Link to='/category/type=project'><button className='section__button section__button--project'>More</button></Link>
                            </div>
                            <div className='section__content--right section__card-grid'>
                                {latestProjects}
                            </div>
                        </div>

                    </div>
                    <div className='section home__container'>
                        <div className='section__header' data-aos="fade-down">
                            <h2 className='section__title'>Aid</h2>
                            <div className='section__dot'></div>
                            <span className='section__count section__count--aid'>{aidItems.length}</span>
                        </div>
                        <div className='section__content'>
                            <div className='section__content--left section__card-grid'>
                                {latestAid}
                            </div>
                            <div className='section__content--right section__content--bring-front section__info section__info--aid' data-aos="flip-left">
                                <div className='section-circle section-circle--aidt'></div>
                                <ImgAid className='section__image section__image--aid'/>
                                <p className='section__info-text section__info-text--aid'>We donate money to those who are in need.</p>
                                <Link to='/category/type=aid'><button className='section__button section__button--aid'>More</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className='section home__container'>
                        <div className='section__header' data-aos="fade-down">
                            <h2 className='section__title'>Events</h2>
                            <div className='section__dot'></div>
                            <span className='section__count section__count--guest'>{eventItems.length}</span>
                        </div> 
                        <div className='section__content'>
                            <div className='section__content--left section__content--bring-front section__info section__info--guest' data-aos="flip-left">
                                <div className='section-circle section-circle--guestt'></div>
                                <ImgGuest className='section__image section__image--guest'/>
                                <p className='section__info-text section__info-text--guest'>We setup special events for the community.</p>
                                <Link to='/category/type=event'><button className='section__button section__button--guest'>More</button></Link>
                            </div>
                            <div className='section__content--right section__card-grid'>
                                {latestEvents}
                            </div>
                        </div>

                    </div>
                </div>
                <div className='home__sections--right'>
                    <Advertisement/>

                </div>
            </div>

            <div className='section section--location'>
                <h2 className='home__sub-title home__sub-title--section' data-aos="fade-down">Where are we?</h2>

                <iframe className='section--location__map margin-top-medium' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77572.92216372718!2d-0.37049195885147335!3d52.58491219183411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8077dccaa4605%3A0xaefe2de1d96d8dd5!2sPeterborough!5e0!3m2!1sen!2suk!4v1596404799681!5m2!1sen!2suk" width="100%" height="450"></iframe>

            </div>
        </div>
    )
}

export default Home