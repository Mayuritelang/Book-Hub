import React from 'react'
import './BookListingCards.css'
import { Link } from 'react-router-dom'

export const BookListingCards = ({bookData}) => {
  return (
    <div className='booklist-card'>
    <div className='booklist-img'>
        <img src={bookData.book_url} alt='booklist-img' className='booklisting-image'/>
    </div>
    <div className='booklist-details'>
        <h3 className='book-name'>{bookData.book_name}</h3>
        <p className='author-name'>{bookData.author_name}</p>
        <p className='price'>&#8377;{bookData.price}</p>
    </div>
    <div className='card-btn-container'>
    <Link to={`/book-details/${bookData.id}`} className='booklist-button'>Add to cart</Link>
    </div>
    </div>
  )
}
