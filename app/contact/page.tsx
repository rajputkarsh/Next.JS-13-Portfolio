
"use client";

import SocialMedia from '@components/socialMedia/SocialMedia';
import ArticlePublish from '@components/svg/articlePublish/ArticlePublish';
import { BLOGS_URL, STATIC_CONTENT, THEME_COLOR_HEX } from '@constant';
import { ThemeContextType } from '@context/theme';
import { ThemeContext } from '@context/theme';
import { getThemeFromContext } from '@helper/theme';
import { redirectTo } from '@helper/url';
import { Button, Grid, Typography } from '@mui/material';
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
          { STATIC_CONTENT.CONTACT.TITLE }
        </Typography>

        <Typography variant="h6">
          { STATIC_CONTENT.CONTACT.BODY }
        </Typography>
  
        <br /><br />
  
        <Typography  style={{alignItems: "center", fontWeight:600}} variant="h5" className={THEME_COLOR}>
          { STATIC_CONTENT.SOCIAL_MEDIA.ALT_TITLE }
        </Typography>        

        <SocialMedia color={THEME[currentTheme].TEXT} email={true}></SocialMedia>
      </Grid>


      <Grid item xs={12} sm={5} className={ VERTICALLY_HORIZONTALLY_CENTER+ " " + SECTION_TITLE + " " + BOTTOM_MARGIN + " " + X_PADDING}>
        <Typography variant="h3" className={THEME_COLOR + " " + BOLD}>
          { STATIC_CONTENT.BLOG_SECTION.TITLE }
        </Typography>

        <Typography variant="h6">
          { STATIC_CONTENT.BLOG_SECTION.BODY }
        </Typography>

        <br/><br/>

        <Button 
          onClick={() => {redirectTo(BLOGS_URL, true)}}
          variant="outlined" 
          color='error' 
          sx={
            {
              color: THEME[currentTheme].TEXT,
              ':hover': {
                border: `1px solid ${THEME[currentTheme].TEXT}`,
                color: THEME_COLOR_HEX,
              }              
            }
          }
        >
          View My Blogs
        </Button>
  
      </Grid>

      <Grid item xs={12} sm={7} className={VERTICALLY_HORIZONTALLY_CENTER}>
        <ArticlePublish />
      </Grid>

    </Grid>
  )
}

export default Contact