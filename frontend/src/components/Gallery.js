import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import { ReactComponent as IconArrowLeft } from '../assets/icons/back.svg'
import { ReactComponent as IconArrowRight } from '../assets/icons/next.svg'

const GalleryItemFoucs = props => {
    return (
        <div className='gallery-main'>
            <img className='gallery-main__image gallery-main__image--background' src='/assets/media/event_imgs/IMG-3d1df6771babec57f5474b5a16e019b1-V6866.b20dbbe96e4f.jpg'></img>
            <div className='gallery-main__container'>
                <img className='gallery-item-focus__image' src='/assets/media/event_imgs/IMG-3d1df6771babec57f5474b5a16e019b1-V6866.b20dbbe96e4f.jpg'></img>
                <div className='gallery-main__gradient'>
                </div>

                <div className='gallery-main__text'>
                    <p className='gallery-main__title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <p className='gallery-main__description'>Vestibulum molestie neque nisl, eu sodales ipsum aliquet vitae. Integer id magna in massa semper dignissim. Sed interdum hendrerit tellus, non finibus eros. Sed nec tellus efficitur felis tincidunt ornare quis id augue</p>
                </div>
            </div>

        </div>
    )
}

const GalleryItem = (props) => {

    const articleURL = props.article ? '/article/id=' + props.article._id : ''
    const image = props.article ? '/assets/media/' + props.article.image : ''
    const title = props.article ? props.article.title : ''
    const text =  props.article ? props.article.text.slice(0, 100) + '..' : ''
    
    return (
        <div className='gallery-item-focus'>
            <Link to={articleURL}>
            <div className='gallery-item-focus__image'>
                <img src={image}></img>
            </div>
            <div className='gallery-item-focus__gradient'></div>
            <div className='gallery-item-focus__text'>
                <h3 className=''>{title}</h3>
                <p className=''>{text }</p>
                <p className=''>{props.article ? 'Click to read more' : ''}</p>
            </div>
            </Link>
        </div>
    )
}
 
const Gallery = (props) => {
    const [articles, setArticles] = useState([])
    let GalleryItems = []
    let Gal 

    useEffect(() => {
        axios.get('http://192.168.1.37:5000/articles/samples/count=5')
        .then(response => {
            setArticles(response.data)
        })
    },[])

    useEffect(() => {
        GalleryItems = articles.map(article => 
            <GalleryItem article={article}/>    
        )
    },[setArticles])


    const settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        centerPadding: '20%',
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        nextArrow: <IconArrowRight/>,
        prevArrow: <IconArrowLeft/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: '0%',
                }
            },
        ]
    };
      return (
          <div className='acontainer'>
            <Slider  {...settings}>
                <GalleryItem article={articles[0]}/>
                <GalleryItem article={articles[1]}/>        
                <GalleryItem article={articles[2]}/>
                <GalleryItem article={articles[3]}/>
            </Slider>
        </div>
      );
  
}

export default Gallery