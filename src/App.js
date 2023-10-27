import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
//import backimage from './assets/images/insects-2688952_1280.jpg'
import { ThemeContext } from './components/DarkModeTheme';
import { useContext } from 'react';

function App() {

  const {darkTheme} = useContext(ThemeContext);
  const bgDark = 'dark App-header' ;
  const bgLight = 'light App-header';
  return (
    
    <div className={!darkTheme? `${bgLight}`: `${bgDark}` } >

      <Header  />
      <SearchForm />
    </div>
  );
}

export default App;