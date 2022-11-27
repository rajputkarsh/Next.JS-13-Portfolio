import { Theme, Time } from "../types/common";

export const THEME = {
    LIGHT: {
        NAVBAR_BACKGROUND: '#FFFFFF',
        NAVBAR_TEXT: '#000000',
    },
    DARK: {
        NAVBAR_BACKGROUND: '#1D1D1D',
        NAVBAR_TEXT: '#FFFFFF',
    },
};

export const getTheme = () => {
    const currentTime: Time = new Date().getHours();
    let currentTheme: Theme;
    // let currentTheme: Theme = localStorage.getItem("theme");
    return "LIGHT" as Theme;
    // return currentTheme ? (currentTheme) : ((currentTime > 18 || currentTime < 5) ? "DARK" : "LIGHT");
}
