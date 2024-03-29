"use client";

import EducationCertificate from "@components/svg/educationCertificate/EducationCertificate";
import Timeline from "@components/timeline/Timeline";
import { STATIC_CONTENT } from "@constant";
import { ThemeContext, ThemeContextType } from "@context/theme";
import { getThemeFromContext } from "@helper/theme";
import { Grid, Typography } from "@mui/material";
import { SECTION_MARGIN, THEME_COLOR, BOTTOM_MARGIN, SECTION_TITLE, VERTICALLY_HORIZONTALLY_CENTER, BOLD, UNDERLINE_ANIMATION } from "@styles/GlobalClassNames";
import { THEME } from "@theme";
import { useContext } from "react";

function Education() {

  const {currentTheme} : ThemeContextType = getThemeFromContext(useContext(ThemeContext));

  return (
    <Grid container justifyContent={'center'} style={{color: THEME[currentTheme].TEXT}}>
      <Grid item xs={12} className={SECTION_TITLE + " " + BOTTOM_MARGIN}>
          <Typography variant="h3" className={THEME_COLOR + " " + BOLD + " " + UNDERLINE_ANIMATION}>
              {
                  STATIC_CONTENT.EDUCATION.TITLE
              }
          </Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={VERTICALLY_HORIZONTALLY_CENTER}>
            <EducationCertificate />
      </Grid>
        <Grid item xs={12} sm={6}  className={VERTICALLY_HORIZONTALLY_CENTER} style={{paddingTop: 0}}>
            <Typography variant="h6" sx={{padding:'15px'}}>
              {
                STATIC_CONTENT.EDUCATION.BODY
              }
            </Typography>
        </Grid>
        <Grid item xs={12} className={SECTION_MARGIN + " " + SECTION_TITLE + " " + BOTTOM_MARGIN}>
          <Typography variant="h4" className={THEME_COLOR + " " + BOLD}>
              {
                  STATIC_CONTENT.EDUCATION.TIMELINE.TITLE
              }
          </Typography>
      </Grid>
      <Timeline events={STATIC_CONTENT.EDUCATION.TIMELINE.CONTENT} />
    </Grid>

  )
}

export default Education