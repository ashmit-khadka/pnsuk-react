import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Advertisement from './Advertisement'
import { ReactComponent as ImgDocument} from '../assets/icons/document.svg'
import dateFormat from 'dateformat'


const Minute = props => {
    const date = dateFormat(props.minute.date, 'mmmm dS, yyyy')
    const doc = '../assets/docs' + props.minute.document
    console.log(process.env.PUBLIC_URL)
    return (
        <div className='minute'>
            <a href={'/assets/media' + props.minute.document} target='_blank'>
            <ImgDocument/>
            <h3>{'Meeting - ' + date}</h3>
            <p>Click to view</p>
            </a>
        </div>
    )
}

const Minutes = props => {

    const [minutes, setMinutes] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/minutes/')
        .then(response => {
            setMinutes(response.data)
        })
    }, [])

    const minuteItems = minutes.map((minute, index) => 
        <Minute key={index} minute={minute}/>
    )

    return (
        <div>
            <div className='base__header'>
                <img className='base__image' src='/assets/media/cover/project.jpg'></img>
                <h2 className='base__title'>Minutes</h2>
            </div>
            <div className='base__content'>
                <div className='base__items'>
                    {minuteItems}
                </div>
                <Advertisement/>
            </div>
        </div>
    )
}

export default Minutes