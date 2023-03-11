
import { ThemeContext, ThemeContextType } from "@context/theme";
import { getThemeFromContext } from "@helper/theme";
import {
  Card as MuiCard,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { THEME_COLOR } from "@styles/GlobalClassNames";
import { THEME } from "@theme";
import { useContext } from "react";

import * as css from './card.module.scss';

type CardContent = {
  title: string;
  body: string;
  image: string;
  imageAlt: string,
  demoUrl: string;
  sourceUrl: string;
};

function Card(cardContent: CardContent) {
  const { currentTheme }: ThemeContextType = getThemeFromContext(
    useContext(ThemeContext)
  );

  const handleClick = () => {
    window.open(cardContent?.demoUrl || cardContent?.sourceUrl, '_blank');
  }

  return (
    <MuiCard
      variant="outlined"
      sx={{
        color: THEME[currentTheme].TEXT,
        height: '350px',
        backgroundColor: THEME[currentTheme].BACKGROUND,
      }}
    >
      <CardActionArea onClick={handleClick}>
        <CardHeader title={cardContent.title} className={THEME_COLOR} />
        <CardMedia
          component="img"
          height="100%"
          className={css.MuiMediaImg}
          image={cardContent.image}
          alt={cardContent.imageAlt}        
        />
        <CardContent>
          <Typography variant="body1">{cardContent.body}</Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
}

export default Card;
