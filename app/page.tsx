
"use client";

import { useContext } from "react";
import { Grid, List, ListItem, Typography } from "@mui/material";
import { ThemeContext, ThemeContextType } from "../context/theme";
import { getThemeFromContext } from "../utils/helper/theme";
import { THEME } from "../utils/theme";
import { STATIC_CONTENT } from "../utils/constant";

import { Icon } from '@iconify/react';

import style from './homepage.module.css'
import { titleCase } from "../utils/helper/text";
import Image from "next/image";
import Introduction from "@components/introduction/Introduction";
import { SECTION_TITLE, VERTICALLY_HORIZONTALLY_CENTER } from "@styles/GlobalClassNames";
import AboutMe from "@components/aboutMe/AboutMe";

export default function Page() {

      const {currentTheme} : ThemeContextType = getThemeFromContext(useContext(ThemeContext));

    return (
        <Grid container spacing={4} sx={{paddingLeft: '10px', paddingRight: '10px', color: THEME[currentTheme].HOME_PAGE.TEXT_COLOR}}>

            <Introduction />

            <AboutMe />


            {/* skills */}
            <Grid item xs={12} className={SECTION_TITLE}>
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
                    <Grid item key={i} xs={12} className={VERTICALLY_HORIZONTALLY_CENTER}>      
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