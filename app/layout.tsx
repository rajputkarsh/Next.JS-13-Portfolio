"use client";

import React from 'react';
import Navbar from '../components/navbar/Navbar';
import useTheme from '../hooks/useTheme';
import "../styles/globals.css";
import { ThemeContext } from '../context/theme';
import ThemeButton from '../components/CustomButtons/ThemeButton';
import { THEME } from '../utils/theme';
import Footer from '../components/footer/Footer';

const RootLayout = ({ children } : { children: React.ReactNode }) => {

    const {theme: currentTheme, setTheme} = useTheme();

    return (
        <html lang="en">
            <ThemeContext.Provider value={{currentTheme, setTheme}}>
                    <body>
                        <header>
                            <Navbar />                    
                        </header>
                        <div style={{paddingTop: '45px', backgroundColor: THEME[currentTheme].BACKGROUND, minHeight:'calc(100vh - 125px)'}}>
                            { children }
                        </div>                        
                        <ThemeButton isFloating={true} />
                    </body>

                    {/* <Footer /> */}

            </ThemeContext.Provider>
        </html>
    );
}

export default RootLayout;

