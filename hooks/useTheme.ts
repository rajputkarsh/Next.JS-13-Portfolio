
import {useState, useEffect} from 'react';
import { Theme, Time } from '../types/common';
import { SETTINGS } from '../utils/constant';

const useTheme = () => {
    
    let localTheme: Theme = SETTINGS.AVAILABLE_THEMES.DARK;

    // if(window.location.search.includes('meta-hex=90786')){
    //     localTheme = SETTINGS.AVAILABLE_THEMES.LIGHT;
    // }

    const [theme, setTheme] = useState<Theme>(localTheme ? localTheme : SETTINGS.AVAILABLE_THEMES.DARK);

    useEffect(() => {
        const currentTime: Time = new Date().getHours();
        setTheme((currentTime > 18 || currentTime < 5) ? SETTINGS.AVAILABLE_THEMES.DARK : SETTINGS.AVAILABLE_THEMES.LIGHT);        
    }, []);


    // local storage method
    // let localTheme = (localStorage.getItem('theme') ?? SETTINGS.AVAILABLE_THEMES.DARK) as string; 
    // if(![SETTINGS.AVAILABLE_THEMES.LIGHT as string, SETTINGS.AVAILABLE_THEMES.DARK as string].includes(localTheme)){
    //     localTheme =  SETTINGS.AVAILABLE_THEMES.DARK as string;
    // }

    // const [theme, setTheme] = useState<Theme>(localTheme as Theme);

    // useEffect(() => {
    //     const currentTheme = localStorage.getItem("theme") ?? SETTINGS.AVAILABLE_THEMES.DARK as string;
    //     setTheme(currentTheme as Theme);
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem('theme', theme);
    // }, [theme]);


    return {theme: theme as Theme, setTheme};
}

export default useTheme;
