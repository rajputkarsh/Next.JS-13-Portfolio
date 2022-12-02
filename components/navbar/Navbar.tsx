
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
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import { CONSTANT_DATA } from "../../utils/constant";
import { THEME } from "../../utils/theme";
import { ThemeContext, ThemeContextType } from '../../context/theme';
import { getThemeFromContext } from '../../utils/helper/theme';

import './Navbar.module.css';

const drawerWidth = 240;

const navItems = () => {
  return Object.values(CONSTANT_DATA.NAVBAR_ITEMS).map(
    (item) => (
      <ListItem key={item.id} disablePadding>
        <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText primary={item.name} />
        </ListItemButton>
      </ListItem>
    )
  )
}

const Navbar = () => {

  const {currentTheme, setTheme} : ThemeContextType = getThemeFromContext(useContext(ThemeContext));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: CONSTANT_DATA.LOGO_NAME.color }}>
        { CONSTANT_DATA.LOGO_NAME.name }
      </Typography>
      <Divider />
      <List>
        {
          navItems()
        }
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ backgroundColor: THEME[currentTheme].NAVBAR_BACKGROUND }} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={
              { 
                flexGrow: 1, 
                display: { 
                  xs: 'none', 
                  sm: 'block' 
                }, 
                fontSize: {
                  sm: '1.225rem',
                  md: '1.825rem',
                  lg: '1.925rem',
                },
                color: CONSTANT_DATA.LOGO_NAME.color
              }
            }
          >
            {CONSTANT_DATA.LOGO_NAME.name}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {
              Object.values(CONSTANT_DATA.NAVBAR_ITEMS).map(
                (item) => (
                    <Button key={item.id} className='navbar-buttons' sx={
                        { 
                          color: THEME[currentTheme].NAVBAR_TEXT,
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
                            xs: '0.575rem',
                            sm: '0.675rem',
                            md: '0.875rem', 
                          }
                        }
                      }>
                      {item.name}
                    </Button>
                )
              )
            }
          <ThemeButton></ThemeButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
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