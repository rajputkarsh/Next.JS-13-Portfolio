import { Theme, Time } from "../types/common";
import { SETTINGS } from "./constant";

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
    let currentTheme: string | null = localStorage.getItem("theme");
    return (currentTheme ? (currentTheme) : ((currentTime > 18 || currentTime < 5) ? "DARK" : "LIGHT")) as Theme;
}
