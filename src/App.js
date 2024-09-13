import React, {useState, useEffect, createContext} from 'react'
import { Route, Routes } from 'react-router-dom'
import app from './Firebase/Firebase'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { Home } from './Pages/Home/Home'
import { Books } from './Pages/Books/Books'
import { BooksDetail } from './Pages/BooksDetail/book-details';
import { About } from './Pages/About/About';
import {Signup} from './Pages/Signup/Signup'
import {Login} from './Pages/Login/Login'
import { Cart } from './Pages/Cart/Cart'
import {ScrollToTop} from './Component/util/ScrollToTop'
import { SearchPage } from './Pages/SearchPage/SearchPage'

export const userContext = createContext({})
export const cartContext = createContext({});

export const App = () => {

  const auth = getAuth(app);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [cartIten, setCartItem] = useState([]);
  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
     onAuthStateChanged(auth, (user) => {
       if(user) {
        setAuthenticatedUser(user);
       } else{
        setAuthenticatedUser(null);
       }
     })
  },[])

  useEffect(() => {
    let total = 0;
    cartIten.forEach((item) => {
      total = total + parseInt(item.price);
    })
     setTotalAmt(total);
  },[cartIten])

  return (
    <ScrollToTop>
    <userContext.Provider value={authenticatedUser}>
      <cartContext.Provider value={{cartIten, totalAmt, setCartItem}}>
        <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/book' element={<Books/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/search' element={<SearchPage/>}/>
       <Route path='/book-details/:id' element={<BooksDetail />} />
       <Route path='/about' element={<About/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/login' element={<Login/>}/>
       </Routes>
       </cartContext.Provider>
       </userContext.Provider>
       </ScrollToTop>
  )
}
