import React, {createContext,useState} from 'react';

export const ThemeContext = createContext()
const DarkModeTheme = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const [fonts, setFonts] = useState('');

    const themeHandler = () => {
        setDarkTheme((prev)=> !prev) ;
    }

    const HandleFont = () => {
        setFonts(
            <ul>
                <li>San Serif</li>
                <li>Serif</li>
                <li>Mono</li>
            </ul>
        )
    }
    
    return(
        <ThemeContext.Provider value={{darkTheme,themeHandler,fonts,HandleFont}}>
           {children}

        </ThemeContext.Provider>
    )

}

export default DarkModeTheme;