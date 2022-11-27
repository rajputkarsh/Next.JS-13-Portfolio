
export const BASE_URL = 'https://utkarshrajput.com/';
export const BASE_URL_WITHOUT_PROTOCOL = 'utkarshrajput.com/';

export const CONSTANT_DATA  = {
    
    LOGO_NAME: {
        name : '<UTKARSH />',
        color: '#e3405f',
    },

    NAVBAR_ITEMS : {
        EDUCATION: {
            id: 'navbar-education',
            name: 'Education',
            color: '#eb6559',
            hoverColor: '#FFF',
            redirect: '/education',
        },
        EXPERIENCE: {
            id: 'navbar-experience',
            name: 'Experience',
            color: '#f7b908',
            hoverColor: '#FFF',
            redirect: '/experience',
        },
        PROJECTS: {
            id: 'navbar-projects',
            name: 'Projects',
            color: '#e44160',
            hoverColor: '#FFF',
            redirect: '/projects',
        },
        BLOGS: {
            id: 'navbar-blogs',
            name: 'Blogs',
            color: '#2f31b3',
            hoverColor: '#FFF',
            redirect: `blogs.${BASE_URL_WITHOUT_PROTOCOL}`,
        },
        CONTACT: {
            id: 'navbar-contact',
            name: 'Contact',
            color: '#47a148',
            hoverColor: '#FFF',
            redirect: '/contact',
        },
        GAMES: {
            id: 'navbar-games',
            name: 'Games',
            color: '#3d4e5c',
            hoverColor: '#FFF',
            redirect: '/games',
        },
    }
};

export const SETTINGS = {
    AVAILABLE_THEMES: {
        LIGHT: 'LIGHT',
        DARK: 'DARK',
    }
};
