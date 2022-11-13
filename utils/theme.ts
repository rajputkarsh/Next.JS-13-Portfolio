import { Theme, Time } from "../types/common";

export const getTheme = () => {
    const currentTime: Time = new Date().getHours();
    let currentTheme: Theme = null;
    // let currentTheme: Theme = localStorage.getItem("theme");

    return currentTheme ? (currentTheme) : ((currentTime > 18 || currentTime < 5) ? "dark" : "light");
}