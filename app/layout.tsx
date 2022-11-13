
import React from 'react';
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { getTheme } from '../utils/theme';

const RootLayout = ({ children } : { children: React.ReactNode }) => {

    const theme = getTheme();

    return (
        <html lang="en" className={theme}>
            <body>
                {children}
            </body>
        </html>
    );
}

export default RootLayout;