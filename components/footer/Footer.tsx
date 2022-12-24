
'use client';

import { CONTENT_PROPERTIES } from "../../utils/constant";
import { THEME } from "../../utils/theme";
import { ThemeContext, ThemeContextType } from '../../context/theme';
import { getThemeFromContext } from '../../utils/helper/theme';
import { useContext } from "react";

function Footer() {

  const {currentTheme} : ThemeContextType = getThemeFromContext(useContext(ThemeContext));

  return (
    <footer style={{textAlign:"center", margin:0, backgroundColor: THEME[currentTheme].NAVBAR_BACKGROUND, color: THEME[currentTheme].HOME_PAGE.TEXT_COLOR}} >
        Made with 
        <span>❤️</span>
        by {
          CONTENT_PROPERTIES.NAME.TITLE
        }
    </footer>
  )
}

export default Footer