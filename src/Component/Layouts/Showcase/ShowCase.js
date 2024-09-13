import React from 'react'
import "./ShowCase.css"
import { Navbar } from '../Navbar/Navbar'
import { SearchForm } from '../../forms/SearchForm/SearchForm'

export const ShowCase = () => {
  return (
    <section className='showcase-container'>
        <Navbar darkTheme={false}/>
        <div className='overlay'></div>
        <div className='showcase-content'>
            <h1>BEST BOOKS AVAILABLE</h1>
            <p>Buy quality books at cheaper price</p>
            <SearchForm darkTheme={true}/>
        </div>
    </section>
  )
}
