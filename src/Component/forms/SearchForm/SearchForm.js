import React, {useState} from 'react'
import './SearchForm.css'
import { useNavigate } from 'react-router-dom';

export const SearchForm = ({darkTheme}) => {
 const [searchField, setSearchField] = useState('')
 const navigate = useNavigate();

 
       const handleSearch = (e) => {
        setSearchField(e.target.value)
      }

  const redirectToSearch = () => {
       if(searchField === ''){
        alert("Search Field is empty");
       } else{
        navigate("/search", {state: searchField});
       }
  } 


  return (
    <div className={ `search-input-form-container ${ darkTheme ? 'dark-box-shadow' : 'light-box-shadow' }` }>
        <input type='text' className='searchbox' placeholder='Search Books' value={searchField}  onChange={handleSearch}/>
        <button  onClick={redirectToSearch}  className='search-button'>Search</button>
        </div>
  )
}
