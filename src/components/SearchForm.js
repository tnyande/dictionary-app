import React from "react";
import { CiSearch } from 'react-icons/ci';
import { useContext } from "react";
import { ContextWord } from "./ContexSearch";
import {BsPlayCircleFill} from 'react-icons/bs'

const SearchForm = () => {
    const {words,searchTerm, setSearchTerm,fetchWord } = useContext(ContextWord);
    const handleSubmit = () => {
      
        if(!searchTerm) {
          alert('Enter Username')
        } else {
          fetchWord();
         // if(!words) {console.log(words)}
        }
        
      }
      const handleInput = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value)
      }
    
    return(
      <div>
        <form onSubmit={handleSubmit} >
        <div className="searchform flex top-12">
            
            <input className="inputText" name="search" type="text" 
            value={searchTerm} onChange={handleInput }
            /> 
           
            <CiSearch className="search" onClick={handleSubmit}
            />
           
            </div>
            </form>
        <div className="word">
          
          <div >
            
           {words && words.map((word) => {
              
              const start = () => {
                const audio = new Audio(test());
                audio.play()
                
              }
              const test = () => {
                return(word.phonetics[0].audio)
              }

            return (
              <div key={Math.floor(Math.random()*100000)}>

              <p >{word.word}</p>
              <h3 >
              {word.phonetic}

              
              
            <BsPlayCircleFill className="sounds" onClick={start}/>
             
              </h3>
              
              <div>
              <p>
                {word.meanings.map((means) => {
                  return (
                    <div key={Math.floor(Math.random()*100000)}>
                     <h3>{means.partOfSpeech} </h3> 
                     <p>
                      <p>
                        Meaning
                      </p>
                      <div>
                      {means.definitions.map((defin) => {

                        return(

                          <div key={Math.floor(Math.random()*100000)}>
                            <p>
                             
                              <ul>
                                <li>
                                {defin.definition}
                                </li>
                                
                              </ul>
                             
                            </p>
                          </div>
                        )
                      })}
                      </div>
                     </p>
                     
                     <p> 
                      Synonyms <span> </span>
                      {means.synonyms}
                      </p> 

                     
                   
                    </div>
                  )
                })}
             {/* {word.meanings[0].definitions[0].definition} */}
              </p>
              </div>
              </div>
            )
           })}
          </div>
          

        </div>
        
      </div>  
    )
}

export default SearchForm;