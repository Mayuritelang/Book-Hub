import React, {useEffect, useState, useContext} from 'react'
import './DetailsSection.css'
import { useParams, useNavigate} from 'react-router-dom'
import { BookData } from '../../../util/BookData'
import {cartContext, userContext} from '../../../App'

export const DetailsSection = () => {
  const {id} = useParams();
  const [bookdata, setbookdata] = useState({});
  const user = useContext(userContext);
  const {cartIten, setCartItem} = useContext(cartContext);
  const navigate = useNavigate();

  useEffect(() => {
     let newData = BookData.filter((book) => book.id === parseInt(id))
     setbookdata(newData[0]);
  }, []);

 /*  useEffect(() => {
     console.log(cartIten);
  }, [cartIten]); */

  const handleToCart = () => {
      if(user) {
          setCartItem([...cartIten, bookdata])
          alert(`The book ${bookdata.book_name} is added to your cart`)
      } else{
         navigate("/Login")
         alert("Please login and sign-up first")
      }
  }

  return (
    <section className='detail-section'>
        <div className='container'>
            <div className='flex-container'>
                <div className='bookImage-container'>
                  <img src={bookdata.book_url}/>
                </div>
                <div className='bookDetails-container'>
                        <h2>{bookdata.book_name}</h2>
                        <p className='text-primary'>{bookdata.author_name}</p>
                        <p className='book-description'>{bookdata.book_description}</p>
                        <p> <b>Language:</b>{bookdata.language}</p>
                        <p> <b>Book Length:</b> {bookdata.print_length}</p>
                        <h3>&#8377;{bookdata.price}</h3>
                        <a onClick={handleToCart} href='#' className='cart-button'>Add to cart</a>
                </div>
            </div>
        </div>
    </section>
  )
}
