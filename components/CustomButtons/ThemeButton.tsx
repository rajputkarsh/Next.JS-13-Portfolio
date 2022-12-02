"use client";

import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { yellow, grey } from '@mui/material/colors';
import { SETTINGS } from '../../utils/constant';
import { ThemeContext, ThemeContextType } from '../../context/theme';
import { getThemeFromContext } from '../../utils/helper/theme';
import { useContext } from 'react';


const ThemeButton = ({isFloating} = {isFloating:false}) => {

  const {currentTheme, setTheme} : ThemeContextType = getThemeFromContext(useContext(ThemeContext));

  let floatingStyles = {
      position:'fixed',
      right: '5px',
      bottom:'15px',  
      display: {sm: 'none'}
    }

  const changeTheme = () => {
    setTheme((currentTheme === SETTINGS.AVAILABLE_THEMES.DARK ? SETTINGS.AVAILABLE_THEMES.LIGHT : SETTINGS.AVAILABLE_THEMES.DARK));
  }

  return  currentTheme === SETTINGS.AVAILABLE_THEMES.LIGHT ? 
    (
      <IconButton
        aria-label="theme button"
        onClick={() => changeTheme()}
        sx={{ mr: 2, display: { xs: 'none', sm:'inline-block' } , color: yellow[600], ...(isFloating && floatingStyles)  } }>
          <LightModeIcon fontSize='large'/>
      </IconButton>    
    )
    :
    (
      <IconButton
        aria-label="theme button"
        onClick={() => changeTheme()}
        sx={{ mr: 2, display: { xs: 'none', sm:'inline-block' } , color: grey[300], ...(isFloating && floatingStyles)  } }>
          <DarkModeIcon fontSize='large'/>
      </IconButton>          
    )


}

export default ThemeButton;