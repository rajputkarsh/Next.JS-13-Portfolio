
import { Grid, Typography } from "@mui/material";
import { titleCase } from "@helper/text";
import { BOLD, SECTION_TITLE, UNDERLINE_TEXT, VERTICALLY_HORIZONTALLY_CENTER } from "@styles/GlobalClassNames";
import { THEME } from "@theme";
import { STATIC_CONTENT } from "@constant";
import style from './skillSection.module.scss';
import { ThemeContext, ThemeContextType } from "@context/theme";
import { getThemeFromContext } from "@helper/theme";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useContext } from "react";

function SkillSection() {


    const { currentTheme }: ThemeContextType = getThemeFromContext(useContext(ThemeContext));

    return (
        <Grid container className="sectionMargin" justifyContent={'center'}>
            <Grid item xs={12} className={SECTION_TITLE}>
                <Typography variant="h3" className={BOLD + " " + UNDERLINE_TEXT}>
                    {
                        STATIC_CONTENT.HOME_PAGE.MY_SKILLSET.TITLE
                    }
                </Typography>
            </Grid>
            <Grid container alignItems="center" justifyContent="center" className={style.skillSectionContainer}>
                {
                    Object.entries(STATIC_CONTENT.HOME_PAGE.MY_SKILLSET.SKILLSET).map(([skillType, skill], i) => (

                        skill.map((skillInfo: { name: string, icon: string, url: string }, j: number) => (
                            <Grid key={`${i}-${j}`} item xs={3} sm={3} md={1} className={style.box + " " + style.animatedBox}>
                                <div className={VERTICALLY_HORIZONTALLY_CENTER} style={{ margin: '8px', minHeight: 'calc(100% - 16px)', minWidth: 'calc(100% - 16px)', backgroundColor: "#FFF", padding: "4px", borderRadius: "12px" }}>
                                    <div title={skillInfo.name}>
                                        {
                                            (skillInfo.icon) ? <Icon icon={skillInfo.icon}  style={{ fontSize: 50, maxWidth: '95%', maxHeight: '95%', color: "#000" }} /> : <Image src={skillInfo.url} alt={skillInfo.name} width={50} height={50} />
                                        }
                                    </div>
                                </div>
                            </Grid>
                        ))
                    ))
                }
            </Grid>
        </Grid>
    )
}

export default SkillSection