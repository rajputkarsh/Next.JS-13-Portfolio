
"use client";

import { SETTINGS } from '@constant';
import { ThemeContext, ThemeContextType } from '@context/theme';
import { getThemeFromContext } from '@helper/theme';
import { Icon } from '@iconify/react';
import { Grid, Typography } from '@mui/material';
import { THEME } from '@theme';
import { TimelineObject } from '@type/common';
import Image from 'next/image';
import { useContext } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function Timeline({events}: {events: Array<TimelineObject>}) {

  const {currentTheme} : ThemeContextType = getThemeFromContext(useContext(ThemeContext));

  const timelineColor = ((currentTheme === SETTINGS.AVAILABLE_THEMES.LIGHT) ? 'rgb(255 210 225)' : 'rgb(177 30 80)');

  return (
    <VerticalTimeline>
      {
        events.map((event, index) => (

          (event.content) ? 
            <VerticalTimelineElement key={`timeline_event_${index}`}
              className="vertical-timeline-element--work"
              contentStyle={{ background: timelineColor, border: "thin solid rgb(233, 30, 99)" , color: THEME[currentTheme].TEXT }}
              contentArrowStyle={{ borderRight: `7px solid  rgb(33, 150, 243)` }}
              date={event.date}
              iconStyle={{ background: timelineColor, color: THEME[currentTheme].TEXT }}
              icon={<Icon icon={event.icon} />}
            >
              <Typography variant='h6' align='center'>{event.event}</Typography>
              <Grid container marginTop={'0.5vh'}>
                <Grid item xs={4} sx={{backgroundColor: "#FFF"}}>
                  <Image src={event.contentIcon} alt={''} style={{maxWidth:'100%', height: "auto"}} />
                </Grid>
                <Grid item xs={8} sx={{padding:'1vw', display:'flex', alignItems:'center'}}>
                  <Typography variant='inherit'>{event.content}</Typography>
                </Grid>
              </Grid>

            </VerticalTimelineElement>
          :
            <VerticalTimelineElement key={`timeline_event_${index}`}
              className="vertical-timeline-element--work"
              contentStyle={{color: THEME[currentTheme].TEXT }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date={event.date}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: THEME[currentTheme].TEXT}}
              icon={<Icon icon={event.icon} />}
            >
            </VerticalTimelineElement>          
        ))
      }
    </VerticalTimeline>
  )
}

export default Timeline