
"use client";

import { useContext } from "react";
import { Grid } from "@mui/material";
import { ThemeContext, ThemeContextType } from "@context/theme";
import { getThemeFromContext } from "@helper/theme";
import { THEME } from "@theme";

import Introduction from "@components/introduction/Introduction";
import AboutMe from "@components/aboutMe/AboutMe";
import SkillSection from "@components/skillSection/SkillSection";
import GithubStats from "@components/GithubStats/GithubStats";

export default function Page() {

      const {currentTheme} : ThemeContextType = getThemeFromContext(useContext(ThemeContext));

    return (
        <Grid container spacing={4} sx={{paddingLeft: '10px', paddingRight: '10px', color: THEME[currentTheme].HOME_PAGE.TEXT_COLOR}}>
            <Introduction />
            <AboutMe />
            <SkillSection />
            <GithubStats />
        </Grid>

    )
}