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
import GamingBoy from "@components/svg/gamingBoy/GamingBoy";
import Card from "@components/card/Card";
import axios from "axios";
import { useQuery } from "react-query";
import { ThreeDots } from "react-loader-spinner";

const fetchGames = () => {
  return axios.get("/api/games");
};

function Games() {

  const { data: games, isLoading } = useQuery("games", fetchGames);

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
          {STATIC_CONTENT.GAMES.TITLE}
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} className={VERTICALLY_HORIZONTALLY_CENTER}>
        <GamingBoy />
      </Grid>

      <Grid item xs={12} sm={6} className={VERTICALLY_HORIZONTALLY_CENTER}>
        <Grid container>
          <Grid item xs={12} justifyContent="center">
            <Typography variant="h6" sx={{ padding: "35px" }}>
              {STATIC_CONTENT.GAMES.BODY}
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
          games?.data?.data?.map(
            (game: { [key: string]: any }, index: number) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={`game${index}`}
                sx={{ margin: "4px" }}
              >
                <Card
                  title={game?.title}
                  body={game?.body}
                  image={game?.image}
                  imageAlt={game?.imageAlt}
                  sourceUrl={game?.sourceUrl}
                  demoUrl={game?.demoUrl}
                />
              </Grid>
            )
          )
        )}
      </Grid>
    </Grid>
  );
}

export default Games;
