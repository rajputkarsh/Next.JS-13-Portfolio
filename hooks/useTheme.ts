
import {useState, useEffect} from 'react';
import { Theme, Time } from '../types/common';
import { SETTINGS } from '../utils/constant';

const useTheme = () => {
    
    const DEFAULT_THEME: Theme = SETTINGS.AVAILABLE_THEMES.LIGHT;

    let localTheme: Theme = DEFAULT_THEME;

    // if(window.location.search.includes('meta-hex=90786')){
    //     localTheme = SETTINGS.AVAILABLE_THEMES.LIGHT;
    // }

    const [theme, setTheme] = useState<Theme>(localTheme ? localTheme : DEFAULT_THEME);

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

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme") ?? DEFAULT_THEME as string;
        setTheme(currentTheme as Theme);
    }, []);

    // useEffect(() => {
    //     localStorage.setItem('theme', theme);
    // }, [theme]);


    return {theme: theme as Theme, setTheme};
}

export default useTheme;
