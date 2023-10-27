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



const Header = () => {
    const {themeHandler} = useContext(ThemeContext);
    const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
    
       
       

    return (
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
                    <ListItemText primary="San-Serif" />
                    <ListItemText primary="Serif" />
                    <ListItemText primary="Mono" />
                    </Collapse>
                </div>
                <div className='toggle theme-icon' >
                    <MdToggleOff className='toggle' />
                </div>
                <span className='moon theme-icon' onClick={themeHandler}>
                    <img src={moon} alt='moon' className='moon' />
                </span>

            </div>
        </div>
    )
}
export default Header;