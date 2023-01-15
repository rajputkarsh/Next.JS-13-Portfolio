
"use client";

import { useContext } from "react";
import { Button, Grid, Typography } from "@mui/material";
import SocialMedia from "@components/socialMedia/SocialMedia";
import { STATIC_CONTENT, THEME_COLOR_HEX } from "@constant";
import { ThemeContext, ThemeContextType } from "@context/theme";
import { getThemeFromContext } from "@helper/theme";
import { THEME } from "@theme";
import { SECTION_MARGIN, THEME_COLOR, BOTTOM_MARGIN, SECTION_TITLE, VERTICALLY_HORIZONTALLY_CENTER, BOLD, UNDERLINE_ANIMATION } from "@styles/GlobalClassNames";
import { toast } from 'react-toastify';
import OfficeWork from "@components/svg/officeWork/OfficeWork";


function Projects() {

  const {currentTheme} : ThemeContextType = getThemeFromContext(useContext(ThemeContext));

  return (
    <Grid container justifyContent={'center'} style={{color: THEME[currentTheme].TEXT}}>
      <Grid item xs={12} className={SECTION_TITLE + " " + BOTTOM_MARGIN}>
          <Typography variant="h3" className={THEME_COLOR + " " + BOLD + " " + UNDERLINE_ANIMATION}>
              {
                  STATIC_CONTENT.PROJECTS.TITLE
              }
          </Typography>
      </Grid>
      
      <Grid item xs={12} sm={6} className={VERTICALLY_HORIZONTALLY_CENTER}>
            <OfficeWork />
      </Grid>
      
      <Grid item xs={12} sm={6}  className={VERTICALLY_HORIZONTALLY_CENTER} >
          <Grid container>
          <Grid item xs={12} justifyContent="center" >
            <Typography variant="h6" sx={{padding:'35px'}}>
              {
                STATIC_CONTENT.PROJECTS.BODY
              }
            </Typography>  
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default Projects