import React, {createContext, useState} from 'react';
import axios from 'axios' ;




export const ContextWord = createContext();

export const  ContexSearch = ({children}) => {

    const [words, setWords] = useState(null);
   const  [searchTerm, setSearchTerm] = useState('');
   const [loading, setLoading] = useState(false);
   const [error,setError] = useState(null);

   

    const fetchWord = async () => {
        try {
            setLoading(true)
             const response = await axios.get(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
            const data = await response.data ; 
            console.log(data)
            setLoading(false)
            setWords(data)

        } 
        
        
        catch (error) {
            setError('no data',error)

        } finally {
            setLoading(false)
        }

    }   


    return (
        <ContextWord.Provider value={{words,searchTerm,setSearchTerm,loading,error,fetchWord}}>
            {children}
        </ContextWord.Provider>
    )
};
export default ContexSearch;

