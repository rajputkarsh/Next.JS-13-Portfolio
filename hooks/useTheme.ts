
import {useState, useEffect} from 'react';
import { Theme, Time } from '../types/common';
import { SETTINGS } from '../utils/constant';

const useTheme = () => {
    
    const [theme, setTheme] = useState<Theme>(SETTINGS.AVAILABLE_THEMES.LIGHT);

    useEffect(() => {
        const currentTime: Time = new Date().getHours();
        let currentTheme: Theme = localStorage.getItem("theme") as Theme;

        setTheme(currentTheme ? (currentTheme) : ((currentTime > 18 || currentTime < 5) ? SETTINGS.AVAILABLE_THEMES.DARK : SETTINGS.AVAILABLE_THEMES.LIGHT));        
    }, []);

    return {theme: theme as Theme, setTheme};
}

export default useTheme;