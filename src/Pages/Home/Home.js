import React from 'react'
import { ShowCase } from '../../Component/Layouts/Showcase/ShowCase'
import { BookList } from '../../Component/Layouts/BookList/BookList'
import { Footer } from '../../Component/Layouts/Footer/Footer'
import { NewsLetter } from '../../Component/Layouts/NewsLetter/NewsLetter'


export const Home = () => {
  return (
    <section>
      <ShowCase/>
      <BookList/>
      <NewsLetter/>
      <Footer/>
    </section>
  )
}
