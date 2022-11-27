
import {useState, useEffect} from 'react';
import { Theme, Time } from '../types/common';
import { SETTINGS } from '../utils/constant';

const useTheme = () => {
    
    const [theme, setTheme] = useState(SETTINGS.AVAILABLE_THEMES.LIGHT);

    useEffect(() => {
        const currentTime: Time = new Date().getHours();
        let currentTheme: string | null = localStorage.getItem("theme");

        setTheme(currentTheme ? (currentTheme) : ((currentTime > 18 || currentTime < 5) ? "DARK" : "LIGHT"));        
    })

}