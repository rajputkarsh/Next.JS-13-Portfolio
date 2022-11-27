
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import "../styles/globals.css";

const RootLayout = ({ children } : { children: React.ReactNode }) => {

    return (
        <html lang="en">
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