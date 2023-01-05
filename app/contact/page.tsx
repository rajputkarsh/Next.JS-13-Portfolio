
"use client";

import SocialMedia from '@components/socialMedia/SocialMedia';
import { STATIC_CONTENT } from '@constant';
import { ThemeContextType } from '@context/theme';
import { ThemeContext } from '@context/theme';
import { getThemeFromContext } from '@helper/theme';
import { Grid, Typography } from '@mui/material';
import { BOLD, BOTTOM_MARGIN, HORIZONTALLY_CENTER, SECTION_TITLE, THEME_COLOR, VERTICALLY_CENTER, VERTICALLY_HORIZONTALLY_CENTER, X_PADDING } from '@styles/GlobalClassNames';
import { THEME } from '@theme';
import Image from 'next/image';
import React, { useContext } from 'react'

import style from './contact.module.scss';

function Contact() {

  const {currentTheme} : ThemeContextType = getThemeFromContext(useContext(ThemeContext));

  return (
    <Grid container justifyContent={'center'} style={{color: THEME[currentTheme].TEXT}}>
      <Grid item xs={12} sm={5} className={VERTICALLY_HORIZONTALLY_CENTER}>
      <Image className={style.shadow} src={STATIC_CONTENT.CONTACT.IMAGE} alt={''} style={{maxWidth:'70%', height: "auto"}} />
      </Grid>
      <Grid item xs={12} sm={7} className={ VERTICALLY_HORIZONTALLY_CENTER+ " " + SECTION_TITLE + " " + BOTTOM_MARGIN + " " + X_PADDING}>
        <Typography variant="h3" className={THEME_COLOR + " " + BOLD}>
          {
            STATIC_CONTENT.CONTACT.TITLE
          }
        </Typography>
        <Typography variant="h6">
          {
            STATIC_CONTENT.CONTACT.BODY
          }
        </Typography>
        <br /><br />
        <SocialMedia color={THEME[currentTheme].TEXT} email={true}></SocialMedia>
      </Grid>
    </Grid>
  )
}

export default Contact