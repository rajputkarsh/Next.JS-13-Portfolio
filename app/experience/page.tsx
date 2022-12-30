"use client";

import SocialMedia from "@components/socialMedia/SocialMedia";
import ExperiencedProfessional from "@components/svg/experiencedProfessional/ExperiencedProfessional";
import { STATIC_CONTENT } from "@constant";
import { ThemeContext, ThemeContextType } from "@context/theme";
import { getThemeFromContext } from "@helper/theme";
import { Button, Grid, Typography } from "@mui/material";
import { SECTION_MARGIN, THEME_COLOR, BOTTOM_MARGIN, SECTION_TITLE, VERTICALLY_HORIZONTALLY_CENTER, UNDERLINE_TEXT } from "@styles/GlobalClassNames";
import { THEME } from "@theme";
import { useContext } from "react";

function Experince() {

  const {currentTheme} : ThemeContextType = getThemeFromContext(useContext(ThemeContext));

  return (
    <Grid container justifyContent={'center'} style={{color: THEME[currentTheme].TEXT}}>
      <Grid item xs={12} className={SECTION_TITLE + " " + BOTTOM_MARGIN}>
          <Typography variant="h3" className={THEME_COLOR + " " + UNDERLINE_TEXT}>
              {
                  STATIC_CONTENT.EXPERIENCE.TITLE
              }
          </Typography>
      </Grid>
      
      <Grid item xs={12} sm={6} className={VERTICALLY_HORIZONTALLY_CENTER}>
            <ExperiencedProfessional />
      </Grid>
      
      <Grid item xs={12} sm={6}  className={VERTICALLY_HORIZONTALLY_CENTER} style={{paddingTop: 0}}>
          <Grid container>
          <Grid item xs={12} justifyContent="center" className={SECTION_MARGIN + " " + SECTION_TITLE + " " + BOTTOM_MARGIN}>
            <Typography variant="h5">
              {
                STATIC_CONTENT.EXPERIENCE.BODY
              }
            </Typography>  
          </Grid>
          <Grid item xs={12} justifyContent="center" className={SECTION_MARGIN + " " + SECTION_TITLE + " " + BOTTOM_MARGIN}>
              <Button variant="contained" color="error">Download my resume</Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} justifyContent="center" display={"flex"} className={SECTION_MARGIN + " " + SECTION_TITLE + " " + BOTTOM_MARGIN}>
        <Typography  style={{display:"flex", alignItems: "center", fontWeight:600}} variant="h5">
          {
            STATIC_CONTENT.SOCIAL_MEDIA.TITLE
          }
        </Typography>  
        <SocialMedia />
      </Grid>

    </Grid>

  )
}

export default Experince