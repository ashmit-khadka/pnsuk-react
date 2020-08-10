import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Category from '../components/Category'
import Members from '../components/Members'
import Article from '../components/Article'
import Contact from '../components/Contact'
import Advertise from '../components/Advertise'
import Membership from '../components/Membership'
import Donate from '../components/Donate'
import Minutes from '../components/Minutes'

import ScrollToTop from '../components/ScrollToTop'



const AppRouter = () => {

    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className='body__header'>
                <Navigation/>
            </div>
            <div className='body__content'>
                <Switch>
                    <Route path='/' component={Home} exact={true}/>
                    <Route path='/category/type=:type' component={Category} exact={true}/>
                    <Route path='/article/id=:id' component={Article}/>
                    <Route path='/committee/type=:type' component={Members}/>
                    <Route path='/contact-us' component={Contact}/>
                    <Route path='/advertise' component={Advertise}/>
                    <Route path='/membership' component={Membership}/>
                    <Route path='/minutes' component={Minutes}/>
                </Switch>
            </div>
            <Footer/>
            <Donate/>

        </BrowserRouter>
    )
}

export default AppRouter