import { Theme, Time } from "../types/common";

export const THEME = {
    LIGHT: {
        TEXT: '#000000',        
        BACKGROUND: '#FFFFFF',
        
        HOME_PAGE: {
            TEXT_COLOR: "#000000"
        }
    },
    DARK: {
        TEXT: '#FFFFFF',
        BACKGROUND: '#1D1D1D',
        
        HOME_PAGE: {
            TEXT_COLOR: "#FFFFFF"
        }
    },
};

export const getTheme = () => {
    const currentTime: Time = new Date().getHours();
    let currentTheme: string | null = localStorage.getItem("theme");
    return (currentTheme ? (currentTheme) : ((currentTime > 18 || currentTime < 5) ? "DARK" : "LIGHT")) as Theme;
}
