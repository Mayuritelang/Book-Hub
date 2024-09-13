import React, { useContext } from 'react'
import './CartItemContainer.css'
import { CartItemCard } from '../../Cards/CartItem-card/CartItemCard'
import { cartContext } from '../../../App'

export const CartItemContainer = () => {

  const { cartIten, totalAmt } = useContext(cartContext);

  return (
    <section className='cartItem-container'>
      <div className='container'>
        {totalAmt === 0 ? (
          <h2 className='empty-cart'>Currently, your cart is empty</h2>
        ) :
          (
            <React.Fragment>

              <h2>Cart</h2>
              {cartIten.map((item) => (
                <CartItemCard key={item.id} bookData={item} />
              ))}
              <h2>Total Amount = &#8377;{totalAmt}</h2>
              <button className='checkOut-btn'>PROCEED TO CHECKOUT</button>
            </React.Fragment>
          )}
      </div>
    </section>
  )
}