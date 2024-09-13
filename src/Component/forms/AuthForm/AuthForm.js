import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import app from '../../../Firebase/Firebase'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

export const AuthForm = ({buttonName, showNameField}) => {
 const [email, setemail] = useState("");
 const [password, setpassword] = useState("");
 const [username, setusername] = useState("");
 const navigate = useNavigate();

 const handleSubmit = (e) => {
  e.preventDefault();

  const auth = getAuth(app);

  
 if(buttonName === "Login") {
  signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    navigate("/");
  }) 
  .catch((err) => {
   alert(`No account found with this email. Please sign up first.`);
   console.log(err)
  })

 } else {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredentials) => {
    userCredentials.user.displayName = username;
    navigate("/");

  }).catch((err) => {
    console.log(err);
  })
 }
 }

  return (
    <form onSubmit={handleSubmit}>
    <div className='signup-fields'>
      
      {showNameField && (
    <input type='text' 
    placeholder='Enter your name'
    value={username}
    onChange={(e) => {
      setusername(e.target.value)
    }}
    />
      )}  

    <input type='email' 
    placeholder='Enter your email' 
    value={email}
    onChange={(e) => {
       setemail(e.target.value);
    }}
    required
    />

    <input 
    type='password'
     placeholder='Password'
     value={password}
     onChange={(e) => {
      setpassword(e.target.value);
     }}
     required
     />

  </div>
  <button>{buttonName}</button>
  </form>
  )
}
