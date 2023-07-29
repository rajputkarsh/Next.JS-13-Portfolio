import { ThemeInput as ReactCalendarThemeInput } from 'react-activity-calendar';
import { Theme } from "@type/common";
import BCM_LOGO from '@public/bcm.gif';
import DAVIET_LOGO from '@public/daviet.jpg';
import SCALER_LOGO from '@public/scaler.png';
import PROFILE_PIC from '@public/profile-pic.webp';

export const GITHUB_API_BASE_URL = ' https://github-contributions-api.jogruber.de/v4/rajputkarsh';
export const GITHUB_MAP_DEFAULT_THEME: ReactCalendarThemeInput = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

export const URL_PROTOCOL              = 'http://';
export const BASE_URL                  = '/';
export const BASE_URL_WITHOUT_PROTOCOL = '/';

export const BLOGS_URL = 'https://blogs.utkarshrajput.com/';

export const THEME_COLOR_HEX = '#E3405F';

export const STATIC_CONTENT  = {

    NAME: {
        TITLE: "Utkarsh",
    },
    
    LOGO_NAME: {
        TITLE : '<UTKARSH />',
    },

    NAVBAR_ITEMS : {
        EDUCATION: {
            id: 'navbar-education',
            name: 'Education',
            color: '#eb6559',
            hoverColor: '#FFF',
            redirect: 'education/',
            redirectNewTab: false,
        },
        EXPERIENCE: {
            id: 'navbar-experience',
            name: 'Experience',
            color: '#f7b908',
            hoverColor: '#FFF',
            redirect: 'experience/',
            redirectNewTab: false,
        },
        PROJECTS: {
            id: 'navbar-projects',
            name: 'Projects',
            color: '#e44160',
            hoverColor: '#FFF',
            redirect: 'projects/',
            redirectNewTab: false,
        },
        BLOGS: {
            id: 'navbar-blogs',
            name: 'Blogs',
            color: '#2f31b3',
            hoverColor: '#FFF',
            redirect: `${BLOGS_URL}`,
            redirectNewTab: true,
        },
        CONTACT: {
            id: 'navbar-contact',
            name: 'Contact',
            color: '#47a148',
            hoverColor: '#FFF',
            redirect: 'contact/',
            redirectNewTab: false,
        },
        GAMES: {
            id: 'navbar-games',
            name: 'Games',
            color: '#3d4e5c',
            hoverColor: '#FFF',
            redirect: 'games/',
            redirectNewTab: false,
        },
    },

    HOME_PAGE : {
        TYPEWRITER_TEXT : {
            preText: "const name = ",
            title: '"Utkarsh";',
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

    EDUCATION: {
        TITLE: "Education",
        BODY: "I have been actively participating in community event, meetups and webinars. Below given is a brief timeline of my education and qualifications.",
        TIMELINE: {
            TITLE: "Timeline",
            CONTENT: [
                {
                    index: 1,
                    event: 'BIRTH',
                    icon : 'ph:baby-light',
                    date: '1999',
                    content: "",
                    contentIcon: "",
                },
                {
                    index: 2,
                    event: 'Became Matriculate',
                    icon : 'teenyicons:school-outline',
                    date: '2015',
                    content: "Completed my matriculation examination in 2015 with a score of 9.6 CGPA",
                    contentIcon: BCM_LOGO,
                },
                {
                    index: 3,
                    event: 'Became a High School Graduate',
                    icon : 'bxs:school',
                    date: '2017',
                    content: "Completed my AISSCE (12th Standard) examination in 2015 with a score of 83.4%",
                    contentIcon: BCM_LOGO,
                },
                {
                    index: 4,
                    event: 'Became an Engineer',
                    icon : 'material-symbols:school-outline-rounded',
                    date: '2021',
                    content: "Completed my Bachelors in Technology (Information Technology) in 2021 with an accumulative score of 8.48 CGPA",
                    contentIcon: DAVIET_LOGO,
                },
                {
                    index: 5,
                    event: 'Started specializing in Data Structures and Algorithms',
                    icon : 'fluent-mdl2:learning-tools',
                    date: '2022',
                    content: `Started my journey in Competitive Coding and DSA via Scaler Academy's Problem Solving & System Design course. Joined the September 2022 intake batch.`,
                    contentIcon: SCALER_LOGO,
                },
                {
                    index: 6,
                    event: 'PRESENT',
                    icon : 'bx:party',
                    date: (new Date()).getFullYear().toString(),
                    content: "",
                    contentIcon: "",
                },            
            ]
        },
    },

    EXPERIENCE: {
        TITLE: "Experience",
        BODY : "I've been working in the industry for about 3 years now. I've started my journey as a Web Developer and currently I'm working as a MERN Stack developer."
    },

    PROJECTS: {
        TITLE: "Projects",
        BODY: "My projects make use of a vast variety of latest technology tools. My best experience is to create MERN Stack based projects, and NextJS Projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
        LATEST_PROJECT_TITLE: "Latest Project",
        OTHER_PROJECTS: "Other Projects",
        COMING_SOON_PROJECTS: "Coming Soon",
    },

    CONTACT: {
        TITLE: "Contact",
        BODY : "I'm reachable on all popular social media applications. You can contact me on the below mentioned places. I'll try to get back to you as soon as possible.",
        IMAGE: PROFILE_PIC,
    },

    GAMES: {
        TITLE: "Games",
        BODY : "Reached Here? Lets play rome refreshing games to reset our minds. Below given are some mind blowing games that you can try.",
    },

    SOCIAL_MEDIA : {
        TITLE: "Follow Me On",
        ALT_TITLE: "Find Me On",
        ICONS: {
            LINKEDIN: {
                title: "LinkedIn",
                url  : "https://www.linkedin.com/in/utkarsh-rajput/",
                type : "linkedin",
                icon : "cib:linkedin-in"
            },
            GITHUB : {
                title: "Github",
                url  : "https://github.com/rajputkarsh",
                type : "github",
                icon : "uiw:github",
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
        }
    },

    BLOG_SECTION: {
        TITLE: 'Blogs',
        BODY : "I don't write frequently but when I do something awesome, I do try to document it so it can be helpful to others."
    },

    EMAIL : {
        title: "Email",
        url  : "mailto:r.utkarsh.0010@gmail.com",
        icon : "material-symbols:alternate-email-rounded"
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
