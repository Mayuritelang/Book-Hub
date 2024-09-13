import React from 'react'
import './SearchResultCard.css'
import { Link } from 'react-router-dom'

export const SearchResultCard = ({bookData}) => {
  return (
    <section className='cartItem'>
            <div className='cartItem-img-container'>
               <img className='cartItem-img' src={bookData.book_url}/>
            </div>
            <div className='cartItem-content-container'>
                <h2>{bookData.book_name}</h2>
                <p>{bookData.author_name}</p>
                <Link to={`/book-details/${bookData.id}`} className='button-primary'>Product Details</Link>
               </div>
        </section>
  )
}
