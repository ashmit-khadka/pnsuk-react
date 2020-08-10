import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';

import axios from 'axios'
import ContentCard from './ContentCard'
import Advertisement from './Advertisement'

import dateFormat from 'dateformat'


const Advert = props => {
    return (
        <div className='advert'>
            <img className='advert__image' src='/assets/media/advert_imgs/gall_1545226443.jpg'></img>
            <h3 className='advert__title'>Lorem ipsum dolor</h3>
            <p className='advert__description'>Vivamus tincidunt risus eu quam sodales convallis. Sed in orci egestas, mollis eros sit amet, mollis orci. Sed ultrices consequat lacus ac lobortis</p>
        </div>
    )
}


const Article = props => {
    
    const [article, setArticle] = useState()
    const [moreItems, setMoreArticle] = useState([])
    const location = useLocation()
    const date = article ? dateFormat(article.date, 'mmmm dS, yyyy') :  <Skeleton />

    console.log(location)

    const getArticle = () => {
        axios.get(`http://${process.env.REACT_APP_HOST}:5000/articles/id/${props.match.params.id}`)
        .then(response => {
            setArticle(response.data)
            console.log(response.data)
        })
        axios.get(`http://${process.env.REACT_APP_HOST}:5000/articles/samples/count=3`)
        .then(response => {
            setMoreArticle(response.data)
            console.log(response.data)
        })
    }

    useEffect(() => {
        setArticle()
        setMoreArticle([])
        getArticle()
    }, [location])

    const image_src = article ? '/assets/media/' + article.image : ''
    const content = moreItems.map((item, index) => 
        <ContentCard key={index} content={item}/>
    )

    return (
        <div className='article'>
            <div className='base__content'>
                <div className='article__details'>
                    <div className='article__info'>
                        <span className='article__tag'>News</span>
                        <h2 className='article__title'>{article ? article.title :  <Skeleton/>}</h2>
                        <span className='article__tag'>{date}</span>
                        <div className='article__image margin-top-medium'>
                            {article ? <img className='article__image--background' src={image_src}></img> : <Skeleton height={500}/>}
                            <img className='article__image--main' src={image_src}></img>
                        </div>
                        <p className='article__text'>{article ? article.text :  <Skeleton count={10}/>}</p>
                    </div>
                    <h3 className='article__more'>More articles</h3>
                    <div className='article__more-items'>
                        {content}
                    </div>
                </div>
                <Advertisement/>
            </div>
        </div>
    )
}

export default Article

