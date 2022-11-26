
import React from 'react';
import "tailwindcss/tailwind.css";
import Navbar from '../components/navbar/Navbar';
import "../styles/globals.css";
import { getTheme } from '../utils/theme';

const RootLayout = ({ children } : { children: React.ReactNode }) => {

    const theme = getTheme();

    return (
        <html lang="en" className={theme}>
            <body>
                <header>
                    <Navbar />                    
                </header>
                {children}
            </body>
        </html>
    );
}

export default RootLayout;