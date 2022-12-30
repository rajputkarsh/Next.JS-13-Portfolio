"use client";

import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import useTheme from '../hooks/useTheme';
import { ThemeContext } from '../context/theme';
import ThemeButton from '../components/CustomButtons/ThemeButton';
import { THEME } from '../utils/theme';
import "../styles/globals.scss";

const RootLayout = ({ children } : { children: React.ReactNode }) => {

    const {theme: currentTheme, setTheme} = useTheme();

    const muiTheme = responsiveFontSizes(createTheme())

    return (
        <html lang="en">
            <ThemeProvider theme={muiTheme}>
                <ThemeContext.Provider value={{currentTheme, setTheme}}>
                        <body>
                            <header>
                                <Navbar />                    
                            </header>
                            <div style={{paddingTop: '45px', backgroundColor: THEME[currentTheme].BACKGROUND, minHeight:'calc(100vh - 180px)'}}>
                                { children }
                            </div>                        
                            <ThemeButton isFloating={true} />

                            <Footer />
                        </body>


                </ThemeContext.Provider>
            </ThemeProvider>
        </html>
    );
}

export default RootLayout;

