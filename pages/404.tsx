"use client";

import Image from "next/image";
import NotFoundPic from "@public/404.png";
import { ThemeContext } from "@context/theme";
import Navbar from "@components/navbar/Navbar";
import ThemeButton from "@components/CustomButtons/ThemeButton";
import Footer from "@components/footer/Footer";
import { THEME } from "@theme";
import useTheme from '../hooks/useTheme';
import { Button, Divider, Grid, Typography } from "@mui/material";
import { CENTER_TEXT, DARK_DIVIDER, LIGHT_DIVIDER } from "@styles/GlobalClassNames";
import { SETTINGS } from "@constant";
import { redirectTo } from "@helper/url";


function NotFoundPage() {

  const {theme: currentTheme, setTheme} = useTheme();

  return (

      <ThemeContext.Provider value={{currentTheme, setTheme}}>
          <header>
            <Navbar />                    
          </header>
          <Grid container alignItems={"center"} justifyContent={"center"} style={{color: THEME[currentTheme].TEXT, backgroundColor: THEME[currentTheme].BACKGROUND, minHeight:'calc(100vh)'}}>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={CENTER_TEXT}>
              <Typography variant="h3" >Page Not Found</Typography>
              <Divider className={currentTheme === SETTINGS.AVAILABLE_THEMES.LIGHT ? DARK_DIVIDER : LIGHT_DIVIDER}>INITIATING MISSION</Divider>
              <Typography variant="h4">ALERT: Hydra is attacking our servers</Typography>
              <Typography variant="h4">MISSION CODE: 404 INITIATED</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={CENTER_TEXT}>
              <Image src={NotFoundPic} alt="oops" />
            </Grid>
            <Grid item xs={12} className={CENTER_TEXT}>
              <Button color="warning" variant="contained" onClick={() => redirectTo("/")}>Go Back</Button>
            </Grid>
          </Grid>

          <ThemeButton isFloating={true} />
          <Footer />

      </ThemeContext.Provider>
  )
}

export default NotFoundPage;