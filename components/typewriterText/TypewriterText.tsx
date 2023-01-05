
import { Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import { BOLD, THEME_COLOR } from "@styles/GlobalClassNames";

function TypewriterText({preText, text, style}: {preText: string, text: string, style: any}) {

  return (
    <Typography variant="h3" className={BOLD}   sx={{
      fontSize: {
        md: 40,
        sm: 28,
        xs: 25
      }
    }}>
      { preText }
      <span className={THEME_COLOR}>
        {
          text.substring(0, 2)
        }
      <Typewriter
        options={{
          strings: [text.substring(2)],
          autoStart: true,
          loop: true,
        }}
      />
      </span>
    </Typography>
  )
}

export default TypewriterText