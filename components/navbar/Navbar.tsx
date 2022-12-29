
'use client';

import { useState, useContext } from 'react';

import ThemeButton from '../CustomButtons/ThemeButton';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import MenuIcon from '@mui/icons-material/Menu';

import { BASE_URL, STATIC_CONTENT } from "../../utils/constant";
import { THEME } from "../../utils/theme";
import { ThemeContext, ThemeContextType } from '../../context/theme';
import { getThemeFromContext } from '../../utils/helper/theme';

import { redirectTo } from '../../utils/helper/url';

import './Navbar.module.css';
import { THEME_COLOR } from '@styles/GlobalClassNames';

const drawerWidth = 240;

const navItems = (color: string) => {
  return Object.values(STATIC_CONTENT.NAVBAR_ITEMS).map(
    (item) => (
      <ListItem key={item.id} disablePadding>
        <ListItemButton sx={{ textAlign: 'center', color: color}}>
          <ListItemText primary={item.name} />
        </ListItemButton>
      </ListItem>
    )
  )
}

const Navbar = () => {

  const {currentTheme} : ThemeContextType = getThemeFromContext(useContext(ThemeContext));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: THEME[currentTheme].BACKGROUND, minHeight: '100vh' }}>
      <Divider />
      <List sx={{}}>
        {
          navItems(THEME[currentTheme].TEXT)
        }
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight:'64px !important' }}>
      <AppBar component="nav" sx={{ backgroundColor: THEME[currentTheme].BACKGROUND, minHeight:'64px !important', justifyContent: 'center' }} >
        <Toolbar>
          <Typography
            variant="h4"
            onClick={() => {redirectTo(BASE_URL)}}
            component="div"
            className={THEME_COLOR}
            sx={
              { 
                flexGrow: 1,
                fontFamily: 'Rock Salt', 
                fontSize: {
                  sm: '1.325rem',
                  md: '1.825rem',
                  lg: '2.325rem',
                },
                cursor: 'pointer'
              }
            }
          >
            {STATIC_CONTENT.LOGO_NAME.TITLE}
          </Typography>
          <IconButton
            aria-label="open drawer"
            edge="start"
            size="medium"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: THEME[currentTheme].TEXT }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {
              Object.values(STATIC_CONTENT.NAVBAR_ITEMS).map(
                (item) => (
                    <Button key={item.id} className='navbar-buttons' onClick={() => {redirectTo(item.redirect)}} sx={
                        { 
                          color: THEME[currentTheme].TEXT,
                          marginLeft: {
                            xs: '3px', 
                            sm: '4px', 
                            md: '5px',                            
                          },
                          marginRight:{
                            xs: '3px', 
                            sm: '4px', 
                            md: '5px',                            
                          },
                          ':hover': {
                            backgroundColor: item.color,
                            boxShadow: `0 2px 10px ${item.color}`,
                            color: "#FFF",
                          },
                          fontSize: {
                            xs: '0.675rem',
                            sm: '0.875rem',
                            md: '1.075rem', 
                          }
                        }
                      }>
                      {item.name}
                    </Button>
                )
              )
            }
          <ThemeButton isFloating={false} />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );

}

export default Navbar