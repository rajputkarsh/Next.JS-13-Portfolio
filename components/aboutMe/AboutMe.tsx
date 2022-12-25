import ManTeleconference from "@components/svg/manTeleconference/ManTeleconference"
import { STATIC_CONTENT } from "@constant"
import { Grid, List, ListItem, Typography } from "@mui/material"
import { BOLD, SECTION_TITLE, VERTICALLY_HORIZONTALLY_CENTER } from "@styles/GlobalClassNames"


function AboutMe() {
  return (
    <>
          <Grid item xs={12} className={SECTION_TITLE}>
            <Typography variant="h3" className={BOLD}>
                {
                    STATIC_CONTENT.HOME_PAGE.ABOUT_ME.TITLE
                }
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={VERTICALLY_HORIZONTALLY_CENTER}>
            <ManTeleconference/>
        </Grid>
        <Grid item xs={12} sm={6}  className={VERTICALLY_HORIZONTALLY_CENTER} style={{paddingTop: 0}}>
            <List>
                <Typography variant="h4" className={BOLD}>
                    {
                        STATIC_CONTENT.HOME_PAGE.ABOUT_ME.CONTENT.TITLE
                    }
                </Typography>
                {
                    STATIC_CONTENT.HOME_PAGE.ABOUT_ME.CONTENT.TEXT.map(
                        (text, index) => (
                            <ListItem key={`ABOUT_ME_${index}`}>
                                <Typography variant="h6" className={BOLD}>
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
    </>
  )
}

export default AboutMe