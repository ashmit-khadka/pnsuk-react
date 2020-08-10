import React from 'react'
import Advertisement from './Advertisement'

const Contact = props => {
    return (
        <div className='base'>
            <div className='base__header'>
                <img className='base__image' src='/assets/media/cover/project.jpg'></img>
                <h2 className='base__title'>Contact Us</h2>
            </div>
            <div className='base__content'>
                <div className='base__items'>   
                    <div className='contact__body'>                 
                        <form>
                            <label className='form__label' for='contact-name'>Name</label>
                            <input className='form__input'id='contact-name' name='form-name' type='text' placeholder='enter your name here..' ></input>
                            <label className='form__label' for='contact-email'>Email</label>
                            <input className='form__input' id='contact-email' name='form-email' type='email' placeholder='enter your email here..' ></input>

                            <label className='form__label' for='contact-subject'>Subject</label>
                            <input className='form__input' id='contact-subject' name='form-subject' type='text' placeholder='enter your subject here..' ></input>
                            <label className='form__label' for='contact-text'>Text</label>
                            <textarea className='form__input' id='contact-text' name='form-text' type='text' placeholder='enter your thoughts here..' ></textarea>
                            <button className='form__submit' type='submit'>Submit</button>
                        </form>
                        <div className='contact__details'>
                            <h3 className='text-medium'>Email</h3>
                            <ul className='contact__info-list'>
                                <li>pnsuk.org@hotmail.com</li>
                                <li>peterborough-nepalisociety@hotmail.com (old)</li>
                            </ul>
                            <h3 className='text-medium margin-top-medium'>Phone</h3>
                            <ul className='contact__info-list'>
                                <li>Shiva Bhandari : 07462916936</li>
                                <li>Harihar Bhattarai : 07470163339</li>
                            </ul>
                            <h3 className='text-medium margin-top-medium'>Address</h3>
                            <ul className='contact__info-list'>
                                <li>46 Winwick Place,</li>
                                <li>Westwood,</li>
                                <li>Peterborough,</li>
                                <li>PE3 7HS</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Advertisement/>
            </div>
        </div>
    )
}

export default Contact