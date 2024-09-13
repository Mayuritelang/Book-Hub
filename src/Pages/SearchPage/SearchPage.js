import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar } from '../../Component/Layouts/Navbar/Navbar'
import { Footer } from '../../Component/Layouts/Footer/Footer'
import './SearchPage.css'
import { BookData } from '../../util/BookData'
import { SearchResultCard } from '../../Component/Cards/SearchResultCard/SearchResultCard'

export const SearchPage = () => {

  const location = useLocation();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    let searchValue = [];
    searchValue = BookData.filter((data) => data.book_name.toLowerCase().includes(location.state.toLowerCase()));

    setSearchResult(searchValue);
  }, [])
 

  return (
    <section>
        <Navbar darkTheme={true}/>
        <div className='search-result-container'>
            <div className='container'>
                <h2>Yor Search Result</h2>
                {searchResult.map((result) => (
                  <SearchResultCard key={result.id}  bookData={result}/>
                ))}
                
            </div>
        </div>
        <Footer/>
    </section>
  )
}
