"use client";

import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import useTheme from '../hooks/useTheme';
import { ThemeContext } from '../context/theme';
import ThemeButton from '../components/CustomButtons/ThemeButton';
import { THEME } from '../utils/theme';
import { ToastContainer } from 'react-toastify';
import { usePathname } from 'next/navigation';

import 'react-toastify/dist/ReactToastify.css';
import "../styles/globals.scss";
import { QueryClient, QueryClientProvider } from 'react-query';

const RootLayout = ({ children } : { children: React.ReactNode }) => {

    const {theme: currentTheme, setTheme} = useTheme();
    const muiTheme = responsiveFontSizes(createTheme());

    const queryClient = new QueryClient();

    const route = usePathname();

    const loader = (
        <html lang="en" style={{backgroundColor: THEME[currentTheme].BACKGROUND}}>
            <ThemeProvider theme={muiTheme}>
                <ThemeContext.Provider value={{currentTheme, setTheme}}>
                    <body style={{backgroundColor: THEME[currentTheme].BACKGROUND}}>
                        <ToastContainer />
                        <QueryClientProvider client={queryClient}>
                        { children }
                        </QueryClientProvider>
                    </body>
                </ThemeContext.Provider>
            </ThemeProvider>
        </html>
    );

    const pages =  (
        <html lang="en" style={{backgroundColor: THEME[currentTheme].BACKGROUND}}>
            <ThemeProvider theme={muiTheme}>
                <ThemeContext.Provider value={{currentTheme, setTheme}}>
                    <body style={{backgroundColor: THEME[currentTheme].BACKGROUND}}>
                        <ToastContainer />
                        <header>
                            <Navbar />                    
                        </header>
                        <div style={{paddingTop: '45px', backgroundColor: THEME[currentTheme].BACKGROUND, minHeight:'calc(100vh - 180px)'}}>
                            <QueryClientProvider client={queryClient}>
                            { children }
                            </QueryClientProvider>
                        </div>                        
                        {/* <ThemeButton isFloating={true} /> */}

                        <Footer />
                    </body>
                </ThemeContext.Provider>
            </ThemeProvider>
        </html>
    );

    return route !== "/" ? pages : loader

}

export default RootLayout;

