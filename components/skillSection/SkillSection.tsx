
import { Grid, Typography } from "@mui/material";
import { titleCase } from "@helper/text";
import { BOLD, SECTION_TITLE, VERTICALLY_HORIZONTALLY_CENTER } from "@styles/GlobalClassNames";
import { THEME } from "@theme";
import { STATIC_CONTENT } from "@constant";
import style from './SkillSection.module.scss';
import { ThemeContext, ThemeContextType } from "@context/theme";
import { getThemeFromContext } from "@helper/theme";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useContext } from "react";

function SkillSection() {


    const { currentTheme }: ThemeContextType = getThemeFromContext(useContext(ThemeContext));

    return (
        <>
            <Grid item xs={12} className={SECTION_TITLE}>
                <Typography variant="h3" className={BOLD}>
                    {
                        STATIC_CONTENT.HOME_PAGE.MY_SKILLSET.TITLE
                    }
                </Typography>
            </Grid>
            {
                Object.entries(STATIC_CONTENT.HOME_PAGE.MY_SKILLSET.SKILLSET).map(([skillType, skill], i) => (
                    <>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={BOLD}>
                                {
                                    titleCase(skillType)
                                }
                            </Typography>
                        </Grid>
                        <Grid item key={i} xs={12} className={VERTICALLY_HORIZONTALLY_CENTER}>
                            <Grid container>                    
                                {
                                    skill.map((skillInfo: { name: string, icon: string, url: string }, j: number) => (
                                        <Grid key={`${i}-${j}`} item xs={6} sm={3} md={1} className={style.box + " " + style.animatedBox}>
                                            <div style={{ margin: '8px', minHeight: 'calc(100% - 16px)', minWidth: 'calc(100% - 16px)', backgroundColor: THEME[currentTheme].BACKGROUND }}>
                                                <div title={skillInfo.name}>
                                                    {
                                                        (skillInfo.icon) ? <Icon icon={skillInfo.icon} style={{ fontSize: 50, maxWidth: '95%', maxHeight: '95%' }} /> : <Image src={skillInfo.url} alt={skillInfo.name} width={50} height={50} />
                                                    }
                                                </div>
                                            </div>
                                        </Grid>
                                    ))
                                }
                            </Grid>

                        </Grid>
                    </>
                ))
            }
        </>
    )
}

export default SkillSection