
"use client";

import { useContext } from "react";
import { Grid, List, ListItem, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import { ThemeContext, ThemeContextType } from "../context/theme";
import { getThemeFromContext } from "../utils/helper/theme";
import { THEME } from "../utils/theme";
import { CONTENT_PROPERTIES } from "../utils/constant";

import CodingBoy from "../components/svg/codingBoy/CodingBoy";

import style from './homepage.module.css'
import ManTeleconference from '../components/svg/manTeleconference/ManTeleconference';

export default function Page() {

      const {currentTheme} : ThemeContextType = getThemeFromContext(useContext(ThemeContext));

    return (
        <Grid container spacing={4} sx={{paddingLeft: '10px', paddingRight: '10px', color: THEME[currentTheme].HOME_PAGE.TEXT_COLOR}}>
            <Grid item xs={12} sm={6} className={style.verticallyHorizontallyCenter}>

                <List>

                        <ListItem  className={style.flexTextCenter}>
                            <Typography variant="h3" className={style.bold}>
                                {CONTENT_PROPERTIES.HOME_PAGE.TYPEWRITER_TEXT.preText}
                                <span style={{color: CONTENT_PROPERTIES.HOME_PAGE.TYPEWRITER_TEXT.color}}>
                                    {
                                        CONTENT_PROPERTIES.HOME_PAGE.TYPEWRITER_TEXT.title.substring(0, 2)
                                    }
                                </span>
                                <Typewriter
                                options={{
                                    strings: [CONTENT_PROPERTIES.HOME_PAGE.TYPEWRITER_TEXT.title.substring(2)],
                                    autoStart: true,
                                    loop: true,
                                }}
                                />                    
                            </Typography>                               
                        </ListItem>

                        {
                            CONTENT_PROPERTIES.HOME_PAGE.INTRODUCTION_TEXTS.map(
                                (text, index) => (
                                    <ListItem key={`introduction_text-${index}`} className={style.flexTextCenter + " " +style.textCenter} >
                                        <Typography variant="h4" className={style.bold + " "}>
                                            {text}
                                        </Typography>
                                    </ListItem>
                                )
                            )
                        }
                        
                </List>

            </Grid>
            <Grid item xs={12} sm={6}>
                <CodingBoy />
            </Grid>

            {/* about me */}
            <Grid item xs={12} className={style.sectionTitle}>
                <Typography variant="h2" className={style.bold}>
                    {
                        CONTENT_PROPERTIES.HOME_PAGE.ABOUT_ME.TITLE
                    }
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} className={style.verticallyHorizontallyCenter}>
                <ManTeleconference/>
            </Grid>
            <Grid item xs={12} sm={6}  className={style.verticallyHorizontallyCenter} style={{paddingTop: 0}}>
                <List>
                    <Typography variant="h4" className={style.bold}>
                        {
                            CONTENT_PROPERTIES.HOME_PAGE.ABOUT_ME.CONTENT.TITLE
                        }
                    </Typography>
                    {
                        CONTENT_PROPERTIES.HOME_PAGE.ABOUT_ME.CONTENT.TEXT.map(
                            (text, index) => (
                                <ListItem key={`ABOUT_ME_${index}`}>
                                    <Typography variant="h6" className={style.bold}>
                                        {
                                            text
                                        }
                                    </Typography>
                                </ListItem>
                            )
                        )
                    }
                </List>
            </Grid>


            {/* skills */}
            <Grid item xs={12} className={style.sectionTitle}>
                <Typography variant="h2" className={style.bold}>
                    {
                        CONTENT_PROPERTIES.HOME_PAGE.MY_SKILLSET.TITLE
                    }
                </Typography>
            </Grid>

        </Grid>

    )
}