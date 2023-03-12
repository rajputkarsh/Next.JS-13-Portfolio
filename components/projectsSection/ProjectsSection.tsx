import Card from '@components/card/Card'
import { STATIC_CONTENT } from '@constant';
import { Icon } from '@iconify/react';
import { redirectTo } from '@helper/url';
import { Grid, Typography } from '@mui/material'
import { BOLD, BOTTOM_MARGIN, CENTER_TEXT, SECTION_MARGIN, SECTION_TITLE, THEME_COLOR, UNDERLINE_ANIMATION, VERTICALLY_HORIZONTALLY_CENTER, X_PADDING } from '@styles/GlobalClassNames';
import { THEME } from '@theme';
import { ThemeContext, ThemeContextType } from '@context/theme';
import { getThemeFromContext } from '@helper/theme';
import { useContext } from 'react';

function ProjectsSection({ projects }: { projects: Array<{ [key: string]: any }> } ) {

  const {currentTheme} : ThemeContextType = getThemeFromContext(useContext(ThemeContext));

  if (!Array.isArray(projects) || projects.length < 1) return null;

  const completedProjects: Array<{ [key: string]: any }> = projects.filter((project) => project?.status == 'completed');
  const ongoingProjects: Array<{ [key: string]: any }> = projects.filter((project) => project?.status != 'completed');

  const projectsList = (projectsArray: Array<{ [key: string]: any }>, title: string) => {
    if (!Array.isArray(projectsArray) || projectsArray.length < 1) return null;
    
    return (
      <>
        <Grid item xs={12} className={SECTION_TITLE + " " + BOTTOM_MARGIN + " " + SECTION_MARGIN}>
          <Typography
            variant="h4"
            className={THEME_COLOR + " " + BOLD + " " + UNDERLINE_ANIMATION}
          >
            {title}
          </Typography>
        </Grid>
        {
          projectsArray?.map(
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
                  key={`project_card_${index}`}
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
        }
      </>
    )
  };

  const latestProject = () => (
    <Grid container className={X_PADDING + " " + SECTION_MARGIN}>
      <Grid item xs={12} className={SECTION_TITLE + " " + BOTTOM_MARGIN}>
        <Typography
          variant="h4"
          className={THEME_COLOR + " " + BOLD + " " + UNDERLINE_ANIMATION}
        >
          {STATIC_CONTENT.PROJECTS.LATEST_PROJECT_TITLE}
        </Typography>
      </Grid>      
      <Grid item xs={12} sm={4} className={VERTICALLY_HORIZONTALLY_CENTER + " " + THEME_COLOR}>
        <Typography variant='h4' className={SECTION_TITLE}>
          {completedProjects[0]?.title}
          <sup>          <Icon icon='bi:box-arrow-up-right' style={{ fontSize: 15, cursor: 'pointer' }} onClick={() => { redirectTo(completedProjects[0]?.demoUrl, true) }} /></sup>
        </Typography>
        <Typography variant='body1' className={CENTER_TEXT} sx={{marginTop: '10px', color: THEME[currentTheme].TEXT}}>
          {completedProjects[0]?.body}
        </Typography>

      </Grid>
      <Grid item xs={12} sm={8} className={VERTICALLY_HORIZONTALLY_CENTER}>
        <img src={completedProjects[0]?.image}></img>
      </Grid>
    </Grid>
  );

  return (
    <>
      
      {/* highlight latest completed project */}
      {latestProject()}

      {/* show remaining completed projects */}
      {projectsList(completedProjects.slice(1), STATIC_CONTENT.PROJECTS.OTHER_PROJECTS)}

      {/* coming soon projects */}
      {projectsList(ongoingProjects, STATIC_CONTENT.PROJECTS.COMING_SOON_PROJECTS)}
    </>
  )
}

export default ProjectsSection;
