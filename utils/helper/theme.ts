
import { ThemeContextType } from "../../context/theme";

export const getThemeFromContext = (themeContext: ThemeContextType) => {
  
  const currentTheme = themeContext.currentTheme;
  const setTheme = themeContext.setTheme;

  return {currentTheme, setTheme};
}
