"use client";

import { useContext } from "react";
import { Grid, Typography } from "@mui/material";
import { STATIC_CONTENT, THEME_COLOR_HEX } from "@constant";
import { ThemeContext, ThemeContextType } from "@context/theme";
import { getThemeFromContext } from "@helper/theme";
import { THEME } from "@theme";
import {
  THEME_COLOR,
  BOTTOM_MARGIN,
  SECTION_TITLE,
  VERTICALLY_HORIZONTALLY_CENTER,
  BOLD,
  UNDERLINE_ANIMATION,
} from "@styles/GlobalClassNames";
import OfficeWork from "@components/svg/officeWork/OfficeWork";
import Card from "@components/card/Card";
import axios from "axios";
import { useQuery } from "react-query";
import { ThreeDots } from "react-loader-spinner";

const fetchProjects = () => {
  return axios.get("/api/projects");
};

function Projects() {
  const { data: projects, isLoading } = useQuery("projects", fetchProjects);

  const { currentTheme }: ThemeContextType = getThemeFromContext(
    useContext(ThemeContext)
  );

  return (
    <Grid
      container
      justifyContent={"center"}
      style={{ color: THEME[currentTheme].TEXT }}
    >
      <Grid item xs={12} className={SECTION_TITLE + " " + BOTTOM_MARGIN}>
        <Typography
          variant="h3"
          className={THEME_COLOR + " " + BOLD + " " + UNDERLINE_ANIMATION}
        >
          {STATIC_CONTENT.PROJECTS.TITLE}
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} className={VERTICALLY_HORIZONTALLY_CENTER}>
        <OfficeWork />
      </Grid>

      <Grid item xs={12} sm={6} className={VERTICALLY_HORIZONTALLY_CENTER}>
        <Grid container>
          <Grid item xs={12} justifyContent="center">
            <Typography variant="h6" sx={{ padding: "35px" }}>
              {STATIC_CONTENT.PROJECTS.BODY}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container alignItems="center" justifyContent="center">
        {isLoading ? (
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
        ) : (
          projects?.data?.data?.map(
            (project: { [key: string]: any }, index: number) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={`project_${index}`}
                sx={{ margin: "4px" }}
              >
                <Card
                  title={project?.title}
                  body={project?.body}
                  image={project?.image}
                  imageAlt={project?.imageAlt}
                  sourceUrl={project?.sourceUrl}
                  demoUrl={project?.demoUrl}
                />
              </Grid>
            )
          )
        )}
      </Grid>
    </Grid>
  );
}

export default Projects;
