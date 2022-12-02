"use client";


import useTheme from '../../hooks/useTheme';
import { Theme } from '../../types/common';

import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { yellow, grey } from '@mui/material/colors';
import { SETTINGS } from '../../utils/constant';
import { ThemeContext, ThemeContextType } from '../../context/theme';
import { getThemeFromContext } from '../../utils/helper/theme';
import { useContext } from 'react';


const ThemeButton = () => {

  const {currentTheme, setTheme} : ThemeContextType = getThemeFromContext(useContext(ThemeContext));

  const changeTheme = () => {
    const newTheme = (currentTheme === SETTINGS.AVAILABLE_THEMES.DARK ? SETTINGS.AVAILABLE_THEMES.LIGHT : SETTINGS.AVAILABLE_THEMES.DARK);
    console.log(`Current Theme = ${currentTheme}\nSetting new theme to ${newTheme}`);
    setTheme(newTheme);
  }

  return  currentTheme === SETTINGS.AVAILABLE_THEMES.LIGHT ? 
    (
      <IconButton
        aria-label="open drawer"
        onClick={() => changeTheme()}
        sx={{ mr: 2, display: { xs: 'none', sm:'inline-block' } , color: yellow[600]} }>
          <LightModeIcon fontSize='large'/>
      </IconButton>    
    )
    :
    (
      <IconButton
        aria-label="open drawer"
        onClick={() => changeTheme()}
        sx={{ mr: 2, display: { xs: 'none', sm:'inline-block' } , color: grey[300]} }>
          <DarkModeIcon fontSize='large'/>
      </IconButton>          
    )


}

export default ThemeButton;