
import { Grid, List, ListItem, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";

import CodingBoy from "@components/svg/codingBoy/CodingBoy";

import { STATIC_CONTENT } from "@constant";

import style from './introduction.module.scss';
import TypewriterText from "@components/typewriterText/TypewriterText";
import { VERTICALLY_HORIZONTALLY_CENTER } from "@styles/GlobalClassNames";

function Introduction() {
  
  return (
    <>
      <Grid item xs={12} sm={6} className={VERTICALLY_HORIZONTALLY_CENTER}>
        <List>
          <ListItem className={style.flexTextCenter}>
            
            <TypewriterText
              preText={STATIC_CONTENT.HOME_PAGE.TYPEWRITER_TEXT.preText}
              text={STATIC_CONTENT.HOME_PAGE.TYPEWRITER_TEXT.title}
              style={style} 
            />
            
          </ListItem>

          {
            STATIC_CONTENT.HOME_PAGE.INTRODUCTION_TEXTS.map(
              (text, index) => (
                <ListItem key={`introduction_text-${index}`} className={style.flexTextCenter + " " + style.textCenter} >
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
    </>
  )
}

export default Introduction