import React from 'react'
import './BookList.css'
import { BookListingCards } from '../../Cards/BooklistingCards/BookListingCards'
import { BookData } from '../../../util/BookData'

export const BookList = () => {
  return (
    <div className='booklist-container'>
        <div className='container'>
            <h1>Here are some books that you might like</h1>
            <hr></hr>
            <div className='listing-container'>
            {BookData.slice(1,5).map((book) => (
                         <BookListingCards key={book.id} bookData={book} />
                    ))}
            </div>
        </div>
    </div>
  )
}
