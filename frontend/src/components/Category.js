import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import ContentCard from './ContentCard'
import Advertisement from './Advertisement'

const Category = props => {

    const [items, setItems] = useState([])
    const location = useLocation()
    let title = ''

    switch ( props.match.params.type ) {
        case 'news':
            title = 'News'
            break
        case 'project':
            title = 'Projects'
            break
        case 'event':
            title = 'Events'
            break
        case 'guests':
            title = 'Guests'
            break
        case 'aid':
            title = 'Aid'
            break
    }

    useEffect(() => {
        title = ''
        setItems([])
        let request = `http://192.168.1.37:5000/articles/type/type=${props.match.params.type}&count=12`
        if (props.match.params.type == 'news' ) {
            request = 'http://192.168.1.37:5000/articles/samples/count=12'
        }
        axios.get(request)
        .then(response => {
            setItems(response.data)
        })
    }, [location])

    const content = items.map((item, index) => 
        <ContentCard key={index} content={item}/>
    )

    console.log(content)

    return (
        <div className='category'>
            <div className='base__header'>
                <img className='base__image' src='/assets/media/cover/project.jpg'></img>
                <h2 className='base__title'>{title}</h2>
            </div>
            <div className='base__content'>
                <div className='base__items'>
                    {content}
                </div>
                <Advertisement/>
            </div>
        </div>
    )
}


export default Category