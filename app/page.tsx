
"use client";

import { useContext } from "react";
import { Grid, List, ListItem, Typography } from "@mui/material";
import { ThemeContext, ThemeContextType } from "../context/theme";
import { getThemeFromContext } from "../utils/helper/theme";
import { THEME } from "../utils/theme";
import { STATIC_CONTENT } from "../utils/constant";

import { Icon } from '@iconify/react';

import style from './homepage.module.css'
import ManTeleconference from '../components/svg/manTeleconference/ManTeleconference';
import { titleCase } from "../utils/helper/text";
import Image from "next/image";
import Introduction from "@containers/introduction/Introduction";

export default function Page() {

      const {currentTheme} : ThemeContextType = getThemeFromContext(useContext(ThemeContext));

    return (
        <Grid container spacing={4} sx={{paddingLeft: '10px', paddingRight: '10px', color: THEME[currentTheme].HOME_PAGE.TEXT_COLOR}}>

            <Introduction />

            {/* about me */}
            <Grid item xs={12} className={style.sectionTitle}>
                <Typography variant="h3" className={style.bold}>
                    {
                        STATIC_CONTENT.HOME_PAGE.ABOUT_ME.TITLE
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
                            STATIC_CONTENT.HOME_PAGE.ABOUT_ME.CONTENT.TITLE
                        }
                    </Typography>
                    {
                        STATIC_CONTENT.HOME_PAGE.ABOUT_ME.CONTENT.TEXT.map(
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
                <Typography variant="h3" className={style.bold}>
                    {
                        STATIC_CONTENT.HOME_PAGE.MY_SKILLSET.TITLE
                    }
                </Typography>
            </Grid>
            {
                Object.entries(STATIC_CONTENT.HOME_PAGE.MY_SKILLSET.SKILLSET).map(([skillType, skill], i) => (
                    <>
                    <Grid item xs={12}>
                        <Typography variant="h5" className={style.bold}>
                            {
                                titleCase(skillType)
                            }
                        </Typography>
                    </Grid>           
                    <Grid item key={i} xs={12} className={style.verticallyHorizontallyCenter}>      
                        {
                            skill.map((skillInfo: {name: string, icon:string, url:string}, j: number) => (
                                <Grid key={`${i}-${j}`} item xs={6} sm={4} md={3} xl={2} className={style.box + " " + style.animatedBox}>
                                    <div style={{margin:'8px', minHeight:'calc(100% - 16px)', minWidth:'calc(100% - 16px)', backgroundColor: THEME[currentTheme].BACKGROUND}}>
                                        <div title={skillInfo.name}>
                                            {
                                                (skillInfo.icon) ? <Icon icon={skillInfo.icon} style={{fontSize:50}}/> : <Image src={skillInfo.url} alt={skillInfo.name} width={50} height={50} />

                                            }
                                        </div>
                                    </div>
                                </Grid>                                        
                            ))
                        }                 
                    </Grid>                            
                    </>
                ))
            }
        </Grid>

    )
}