import React from "react";
import { CiSearch } from 'react-icons/ci';
import { useContext } from "react";


const SearchForm = () => {
  /*  
    const handleSubmit = () => {
        if(!searchTerm) {
          alert('Enter Username')
        } else {
          fetchWord();
        }
      }

      */
    
    return(
        <div className="searchform flex top-12">
            
            <input className="inputText" name="search" type="text" 
           /* value={searchTerm} onChange={(e) => setSearchTerm(e.target.value) }
           */
           /> 
            
            <CiSearch className="search" 
            /*onClick={handleSubmit}
            */
            />
        </div>
    )
}

export default SearchForm;