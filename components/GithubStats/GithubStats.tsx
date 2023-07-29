import React from 'react';
import { useQuery } from "react-query";
import axios from "axios";
import { Grid, Typography } from '@mui/material';
import { BOLD, BOTTOM_MARGIN, CENTER_TEXT, SECTION_MARGIN, SECTION_TITLE, THEME_COLOR, UNDERLINE_ANIMATION, VERTICALLY_HORIZONTALLY_CENTER, X_PADDING } from '@styles/GlobalClassNames';
import { STATIC_CONTENT, THEME_COLOR_HEX, GITHUB_MAP_DEFAULT_THEME } from '@constant';
import { ThreeDots } from "react-loader-spinner";
import Calendar from 'react-activity-calendar';
import style from './GithubStats.module.scss';

const fetchGithubData = () => {
    return axios.get("/api/github");
};

function GithubStats() {
    const { data: githubStats, isLoading }: { data: any, isLoading: Boolean} = useQuery("projects", fetchGithubData);

    console.log(githubStats?.data?.data);

    const defaultLabels = {
        totalCount: `{{count}} contributions in ${new Date().getFullYear()}`,
    };    

  return (
    <>
        {isLoading ? (

            <Grid item xs={12} className={style.statsContainer}>
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color={THEME_COLOR_HEX}
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
            </Grid>
        ) : (
            <>
                <Grid item xs={12} className={SECTION_TITLE + " " + BOTTOM_MARGIN + " " + SECTION_MARGIN}>
                    <Typography
                        variant="h3"
                        className={THEME_COLOR + " " + BOLD + " " + UNDERLINE_ANIMATION}
                    >
                        {STATIC_CONTENT.HOME_PAGE.GITHUB_STATS.TITLE}
                    </Typography>
                </Grid>
                <Grid item xs={12} className={style.statsContainer}>
                    <Calendar
                        data={githubStats?.data?.data?.contributions || []}
                        theme={GITHUB_MAP_DEFAULT_THEME}
                        colorScheme='light'
                        labels={Object.assign({}, defaultLabels)}
                        totalCount={githubStats?.data?.data?.total?.[new Date().getFullYear()] || 999}
                    />
                </Grid>
            </>
        )}
    </>
  )
}

export default GithubStats