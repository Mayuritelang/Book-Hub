import React from 'react'
import { Navbar } from '../../Component/Layouts/Navbar/Navbar'
import { Footer } from '../../Component/Layouts/Footer/Footer'
import { CartItemContainer } from '../../Component/Layouts/CartItemContainer/CartItemContainer'

export const Cart = () => {
  return (
     <section>
      <Navbar darkTheme={true}/>
      <CartItemContainer/>
      <Footer/>
     </section>
  )
}
