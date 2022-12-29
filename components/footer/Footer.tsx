
'use client';

import { STATIC_CONTENT } from "../../utils/constant";
import { THEME } from "../../utils/theme";
import { ThemeContext, ThemeContextType } from '../../context/theme';
import { getThemeFromContext } from '../../utils/helper/theme';
import { useContext } from "react";
import { THEME_COLOR } from "@styles/GlobalClassNames";

function Footer() {

  const {currentTheme} : ThemeContextType = getThemeFromContext(useContext(ThemeContext));

  return (
    <footer style={{paddingTop: "5vh", textAlign:"center", margin:0, color: THEME[currentTheme].TEXT, backgroundColor: THEME[currentTheme].BACKGROUND}} >
        Made with 
        <span> ❤️ </span>
        by 
        <span className={THEME_COLOR} >
          {
            " "+ STATIC_CONTENT.NAME.TITLE
          }
        </span>
    </footer>
  )
}

export default Footer