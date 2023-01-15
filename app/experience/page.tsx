"use client";

import { useContext } from "react";
import { Button, Grid, Typography } from "@mui/material";
import SocialMedia from "@components/socialMedia/SocialMedia";
import ExperiencedProfessional from "@components/svg/experiencedProfessional/ExperiencedProfessional";
import { STATIC_CONTENT, THEME_COLOR_HEX } from "@constant";
import { ThemeContext, ThemeContextType } from "@context/theme";
import { getThemeFromContext } from "@helper/theme";
import { THEME } from "@theme";
import { SECTION_MARGIN, THEME_COLOR, BOTTOM_MARGIN, SECTION_TITLE, VERTICALLY_HORIZONTALLY_CENTER, BOLD, UNDERLINE_ANIMATION } from "@styles/GlobalClassNames";
import { toast } from 'react-toastify';

function Experince() {

  const {currentTheme} : ThemeContextType = getThemeFromContext(useContext(ThemeContext));

  return (
    <Grid container justifyContent={'center'} style={{color: THEME[currentTheme].TEXT}}>
      <Grid item xs={12} className={SECTION_TITLE + " " + BOTTOM_MARGIN}>
          <Typography variant="h3" className={THEME_COLOR + " " + BOLD + " " + UNDERLINE_ANIMATION}>
              {
                  STATIC_CONTENT.EXPERIENCE.TITLE
              }
          </Typography>
      </Grid>
            
      <Grid item xs={12} sm={6}  className={VERTICALLY_HORIZONTALLY_CENTER} >
          <Grid container>
          <Grid item xs={12} justifyContent="center" >
            <Typography variant="h6" sx={{padding:'35px'}}>
              {
                STATIC_CONTENT.EXPERIENCE.BODY
              }
            </Typography>  
          </Grid>
          <Grid item xs={12} justifyContent="center" className={SECTION_TITLE}>
              <Button 
                variant="contained" 
                color="error" sx={
                  { 
                    backgroundColor: THEME_COLOR_HEX,
                    ':hover': {
                      backgroundColor: THEME_COLOR_HEX,
                    }              
                  }
                  }
                onClick={() => {toast.error("We'll get back to you.")}}
              >Download my resume</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} className={VERTICALLY_HORIZONTALLY_CENTER}>
            <ExperiencedProfessional />
      </Grid>

      <Grid item xs={12} justifyContent="center" className={SECTION_MARGIN + " " + SECTION_TITLE + " " + BOTTOM_MARGIN}>
        <Typography  style={{alignItems: "center", fontWeight:600}} variant="h5" className={THEME_COLOR}>
          {
            STATIC_CONTENT.SOCIAL_MEDIA.TITLE
          }
        </Typography>  
        <SocialMedia color={THEME[currentTheme].TEXT} email={false} />
      </Grid>

    </Grid>

  )
}

export default Experince