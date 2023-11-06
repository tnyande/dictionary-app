import React from 'react';
import { useContext } from 'react';
import moon from '../assets/images/icon-moon.svg';
import logo from '../assets/images/logo.svg';
import { MdToggleOff } from 'react-icons/md';
import { ThemeContext } from './DarkModeTheme';
import ListItemText from '@mui/material/ListItemText';
import Collapse  from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ListItemButton } from '@mui/material';
import Container from 'react-bootstrap/Container';



const Header = () => {
    const {themeHandler} = useContext(ThemeContext);
    const [open, setOpen] = React.useState(false);
    const [fonts, setFonts] = React.useState('Mono');

  const handleClick = () => {
    setOpen(!open);
  };
    
  const HandleFont = (e) => {
    setFonts(e.target.value);
    console.log(fonts);
  }
       
       

    return (
        <Container className='container'>
        <div>
            <div className='logo' >
                    <img src={logo} alt='logo' />
            </div>
           
            <div className='darkmoon'>
                 {/*}   {
                        darkTheme? 'light':'dark'
                    }
                */}
                <div className='arrow theme-icon' >
                   
                <ListItemButton onClick={handleClick}>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                    
                    <Collapse in={open} timeout="auto" unmountOnExit>
                    <ListItemText primary="San-Serif" value="San-Serif" onClick={HandleFont}/>
                    <ListItemText primary="Serif" value="Serif" onClick={HandleFont}/>
                    <ListItemText primary="Mono"value="Mono" onClick={HandleFont} />
                    </Collapse>
                </div>
                <div className='toggle theme-icon' >
                    <MdToggleOff className='toggle' onClick={themeHandler}/>
                </div>
                <span className='moon theme-icon' onClick={themeHandler}>
                    <img src={moon} alt='moon' className='moon' />
                </span>

            </div>
        </div>
        </Container>)
}
export default Header;