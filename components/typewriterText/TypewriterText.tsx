
import { Typography } from "@mui/material";
import Typewriter from "typewriter-effect";

import { BOLD } from "@styles/GlobalClassNames";
import globalColor from "@styles/color.module.scss";

function TypewriterText({preText, text, style}: {preText: string, text: string, style: any}) {

  return (
    <Typography variant="h4" className={BOLD}>
      { preText }
      <span className={globalColor.themeColor}>
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