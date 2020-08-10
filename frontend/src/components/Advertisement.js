import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Advert = props => {
    return (
        <div className='advert'>
            <a href={props.advert.url} target='_blank'>
            <img src={'/assets/media' + props.advert.image}></img>
            <h3>{props.advert.title}</h3>
            <p>{props.advert.description}</p>
            </a>
        </div>
    )
}


const Advertisement = props => {

    const [adverts, setAdverts] = useState([])
    console.log('env...', process.env)
    useEffect(() => {
        axios.get(`http://${process.env.REACT_APP_HOST}:5000/adverts/`)
        .then(response => {
            setAdverts(response.data)
        })
    },[])   
    
    let advertItems = adverts.map((advert, index) => 
        <Advert key={index} advert={advert}/>
    )

    //promotion advert
    advertItems.push( <Advert key={advertItems.length} advert = {{
        'title': 'Advertise here',
        'description': 'Slot available here for your add, click to learn more',
        'url': 'http://www.pnsuk.org/advertise/', 
        'img': '/minute_docs/gall_1545226443.jpg',
    }}/>)
    
    return (
        <div className='adverts'>
            {advertItems}
        </div>
    )
}

export default Advertisement
