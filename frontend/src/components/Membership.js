import React from 'react'
import Advertisement from './Advertisement'


const Membership = props => {
    return (
        <div className='base'>
            <div className='base__header'>
                <img className='base__image' src='/assets/media/cover/project.jpg'></img>
                <h1 className='base__title'>Membership From</h1>
            </div>
            <div className='base__content'>
                <div className=''>
                    <form>
                        <label className='form__label' for='contact-name'>Name</label>
                        <input className='form__input'id='contact-name' name='form-name' type='text' placeholder='enter your name here..' ></input>

                        <label className='form__label' for='contact-email'>Email</label>
                        <input className='form__input' id='contact-email' name='form-email' type='email' placeholder='enter your email here..' ></input>

                        <label className='form__label' for='contact-address'>Address</label>
                        <input className='form__input' id='contact-address' name='form-address' type='text' placeholder='enter your address here..' ></input>

                        <label className='form__label' for='contact-phone'>Phone</label>
                        <input className='form__input' id='contact-phone' name='form-phone' type='email' placeholder='enter your phone number here..' ></input>

                        <label className='form__label' for='contact-comments'>Comments (optional)</label>
                        <textarea className='form__input' id='contact-comments' name='form-comments' type='text' placeholder='enter your comments here..' ></textarea>
                        <button className='form__submit' type='submit'>Submit</button>
                    </form>
                </div>
                <Advertisement/>
            </div>
        </div>
    )
}

export default Membership