import { Theme } from "../types/common";

// export const URL_PROTOCOL              = 'https://';
// export const BASE_URL                  = 'https://utkarshrajput.com/';
// export const BASE_URL_WITHOUT_PROTOCOL = 'utkarshrajput.com/';

export const URL_PROTOCOL              = 'http://';
export const BASE_URL                  = 'http://localhost:3000/';
export const BASE_URL_WITHOUT_PROTOCOL = 'localhost:3000/';

export const CONTENT_PROPERTIES  = {

    NAME: {
        TITLE: "Utkarsh",
        COLOR: '#e3405f',
    },
    
    LOGO_NAME: {
        TITLE : '<UTKARSH />',
        COLOR: '#e3405f',
    },

    NAVBAR_ITEMS : {
        EDUCATION: {
            id: 'navbar-education',
            name: 'Education',
            color: '#eb6559',
            hoverColor: '#FFF',
            redirect: 'education/',
        },
        EXPERIENCE: {
            id: 'navbar-experience',
            name: 'Experience',
            color: '#f7b908',
            hoverColor: '#FFF',
            redirect: 'experience/',
        },
        PROJECTS: {
            id: 'navbar-projects',
            name: 'Projects',
            color: '#e44160',
            hoverColor: '#FFF',
            redirect: 'projects/',
        },
        BLOGS: {
            id: 'navbar-blogs',
            name: 'Blogs',
            color: '#2f31b3',
            hoverColor: '#FFF',
            redirect: `${URL_PROTOCOL}blogs.${BASE_URL_WITHOUT_PROTOCOL}`,
        },
        CONTACT: {
            id: 'navbar-contact',
            name: 'Contact',
            color: '#47a148',
            hoverColor: '#FFF',
            redirect: 'contact/',
        },
        GAMES: {
            id: 'navbar-games',
            name: 'Games',
            color: '#3d4e5c',
            hoverColor: '#FFF',
            redirect: 'games/',
        },
    },

    HOME_PAGE : {
        TYPEWRITER_TEXT : {
            preText: "const name = ",
            title: '"Utkarsh";',
            color: "#e3405f",
        },
        INTRODUCTION_TEXTS : [
            "Full Stack Developer 👨‍💻",
            "Tech Enthusiast 🔥",
            "Always Learning 🎯",
        ],
        ABOUT_ME: {
            TITLE: "About Me",
            CONTENT: {
                TITLE: "I am currently...",
                TEXT: [
                    "👀 Witnessing world in React.JS and Next.JS",
                    "💭 Dreaming in Node.JS, Express.JS and Nest.JS",
                    "🤔 Saving short term memories in Redis",
                    "💾 Saving Long term memories in MongoDB and SQL",
                    "📡 Streaming everything together using Kafka and RabbitMQ",
                ],                
            },
        },
        MY_SKILLSET: {
            TITLE: "My Skillset",
        },
    },

    SOCIAL_MEDIA_ICONS : {
        LINKEDIN: {
            title: "LinkedIn",
            url  : "https://www.linkedin.com/in/utkarsh-rajput/",
            type : "linkedin",
            icon : "logos:linkedin-icon"
        },
        GITHUB : {
            title: "Github",
            url  : "https://github.com/rajputkarsh",
            type : "github",
            icon : "logos:github-icon",
        },
        TWITTER : {
            title: "Twitter",
            url  : "https://twitter.com/thedevperson",
            type : "twitter",
            icon : "logos:twitter"
        },
        STACKOVERFLOW : {
            title: "Stack Overflow",
            url  : "https://stackoverflow.com/users/15149125/utkarsh",
            type : "stackoverflow",
            icon : "logos:stackoverflow-icon",
        },
    },

    EMAIL : {
        title: "Email",
        url  : "r.utkarsh.0010@gmail.com",
        type : "email",
    }
};

const LIGHT: Theme = 'LIGHT';
const DARK: Theme  = 'DARK';

export const SETTINGS = {
    AVAILABLE_THEMES: {
        LIGHT,
        DARK,
    }
};
