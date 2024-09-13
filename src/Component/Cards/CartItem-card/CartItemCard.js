import React, {useContext} from 'react'
import './CartItemCard.css'
import { cartContext } from '../../../App'

export const CartItemCard = ({bookData}) => {

  const {cartIten, setCartItem} = useContext(cartContext);

  const removeFromCart = () => {
    console.log(bookData.id)
    setCartItem(cartIten.filter((item) => item.id !== bookData.id))
  }

  return (
    <section className='cartItem'>
            <div className='cartItem-img-container'>
               <img className='cartItem-img' src={bookData.book_url}/>
            </div>
            <div className='cartItem-content-container'>
                <h2>{bookData.book_name}</h2>
                <p>{bookData.author_name}</p>
                <h3 className='cartItem-price'>&#8377;{bookData.price}</h3>
                <button onClick={removeFromCart} className='remove-cartItem'>Remove from cart</button>
                </div>
        </section>
  )
}
