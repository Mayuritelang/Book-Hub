import React from 'react'
import './AllBookListing.css'
import {BookListingCards} from '../../Cards/BooklistingCards/BookListingCards'
import {BookData} from '../../../util/BookData'

export const AllBookListing = () => {
  return (
    <section className='allbook-listing-container'>
      <div className='container'>
        <div className='grid-container'>
          {BookData.map((book) => {
            return (
              <div key={book.id} className='grid-items'>
              <BookListingCards  bookData={book}/>
            </div>
            )
          } )}
        </div>
      </div>
    </section>
  )
}

