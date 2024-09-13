import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <section>
        <div className='news-letters'>
        <h1>Get Exclusive Offers On Your Email-id</h1>
        <p>Subscribe To Our New Letter And Stay Updated</p>
        <div>
            <input type='text' placeholder='Enter your email'></input>
            <button>Subscribe</button>
        </div>
    </div>
    </section>
  )
}
