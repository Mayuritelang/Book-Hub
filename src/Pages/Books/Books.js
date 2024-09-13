import React from 'react'
import './Books.css'
import { Navbar } from '../../Component/Layouts/Navbar/Navbar'
import { SearchForm } from '../../Component/forms/SearchForm/SearchForm'
import { AllBookListing } from '../../Component/Layouts/BooklistingAll/AllBookListing'
import {Footer} from '../../Component/Layouts/Footer/Footer'

export const Books = () => {
  return (
    <section>
      <Navbar darkTheme = {true}/>
      <div className='search-container'>
        <h2>Find The Books That You Want....</h2>
        <SearchForm darkTheme={false}/>
      </div>
      <AllBookListing/>
      <Footer/>
    </section>
  )
}
