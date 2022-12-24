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
            SKILLSET: {
                LANGUAGES: [
                    {
                        name: "Javascript",
                        icon: "fluent:javascript-24-regular",
                        url : "",
                        
                    },
                    {
                        name: "Typescript",
                        icon: "tabler:brand-typescript",
                        url : "",
                    },
                ],
                FRONTEND: [
                    {
                        name: "React.JS",
                        icon: "vscode-icons:file-type-reactjs",
                        url : "",
                    },
                    {
                        name: "Next.JS",
                        icon: "teenyicons:nextjs-outline",
                        url : "",
                    },
                    {
                        name: "SCSS",
                        icon: "vscode-icons:file-type-scss",
                        url : "",
                    },
                    {
                        name: "MaterialUI",
                        icon: "mdi:material-ui",
                        url : "",
                    },
                    {
                        name: "Tailwind CSS",
                        icon: "logos:tailwindcss-icon",
                        url : "",
                    },
                ],
                STATE_MANAGEMENT: [
                    {
                        name: "Redux",
                        icon: "tabler:brand-redux",
                        url : "",
                    },
                    {
                        name: "Recoil",
                        icon: "logos:recoil-icon",
                        url : "",
                    },
                ],
                BACKEND: [
                    {
                        name: "Node.JS",
                        icon: "logos:nodejs",
                        url : "",
                    },
                    {
                        name: "Express.JS",
                        icon: "logos:express",
                        url : "",
                    },
                    {
                        name: "Nest.JS",
                        icon: "",
                        url: "/nestjs-icon.svg",
                    },
                    {
                        name: "Hapi.JS",
                        icon: "logos:hapi",
                        url : "",
                    },
                ],
                DATABASE: [
                    {
                        name: "MongoDB",
                        icon: "logos:mongodb",
                        url : "",
                    },
                    {
                        name: "MySQL",
                        icon: "logos:mysql",
                        url : "",
                    },
                ],
                VERSION_CONTROL: [
                    {
                        name: "Git",
                        icon: "mdi:git",
                        url : "",
                    },
                    {
                        name: "Gitlab",
                        icon: "logos:gitlab",
                        url : "",
                    },
                    {
                        name: "Github",
                        icon: "mdi:github",
                        url : "",
                    }
                ],
                MISC: [
                    {
                        name: "GraphQL",
                        icon: "logos:graphql",
                        url : "",
                    },
                    {
                        name: "Redis",
                        icon: "logos:redis",
                        url : "",
                    },
                    {
                        name: "Kafka",
                        icon: "logos:kafka",
                        url : "",
                    },
                    {
                        name: "RabbitMQ",
                        icon: "logos:rabbitmq-icon",
                        url : "",
                    },
                    {
                        name: "Firebase",
                        icon: "logos:firebase",
                        url : "",
                    },
                ]
            },
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
