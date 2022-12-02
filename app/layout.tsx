"use client";

import React from 'react';
import Navbar from '../components/navbar/Navbar';
import useTheme from '../hooks/useTheme';
import "../styles/globals.css";
import { ThemeContext } from '../context/theme';

const RootLayout = ({ children } : { children: React.ReactNode }) => {

    const {theme: currentTheme, setTheme} = useTheme();

    return (
        <html lang="en">
            <ThemeContext.Provider value={{currentTheme, setTheme}}>
                    <body>
                        <header>
                            <Navbar />                    
                        </header>
                        {children}
                    </body>
            </ThemeContext.Provider>
        </html>
    );
}

export default RootLayout;

