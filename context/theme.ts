
import { Dispatch, SetStateAction, createContext } from 'react';
import { Theme } from '../types/common';
import { SETTINGS } from '../utils/constant';

export type ThemeContextType = {
  currentTheme : Theme,
  setTheme: Dispatch<React.SetStateAction<Theme>>, 
}


export const ThemeContext = createContext<ThemeContextType>({currentTheme: SETTINGS.AVAILABLE_THEMES.LIGHT as Theme, setTheme: () => {}});