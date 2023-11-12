import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login, About, Faqs, Home, Policy, Shop, Terms, Register, Forgot, Cart, Wishlist, Contact, Error } from './page'
import Contact_us from './page/Contact_us'
import SingleProducts from './page/SingleProducts'

const Path = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/faq' element={<Faqs />} />
            <Route path='/policy' element={<Policy />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forgot' element={<Forgot />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/contact-us' element={<Contact_us />} />
            <Route path='/product-details/:id' element={<SingleProducts />} />
            <Route path='*' element={<Error/>}/>
        </Routes>
    )
}

export default Path
