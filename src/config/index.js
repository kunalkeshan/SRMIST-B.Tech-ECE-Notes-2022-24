/**
 * Application Config
 */

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const APP_COLORS = {
    main: '#E2FDFF',
    accent: '#FDCA40',
    dark: '#011936',
    darkAccent: '#465362',
};

const config = {
    WEBSITE_URL: `${window.location.protocol}//${window.location.host}`,
    GITHUB_URL: 'https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24',
    CONTRIBUTORS_URL: `https://api.github.com/repos/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24/contributors?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    GA_TRACKING_ID: 'G-4FNHZ2Y1KD',
    APP_COLORS,
    CONTACT: {
        email: 'kunalkeshan12@gmail.com',
        instagram: 'https://www.instagram.com/kunalkeshan/',
        linkedIn: 'https://www.linkedin.com/in/kunalkeshan/',
        twitter: 'https://twitter.com/_kunalkeshan_',
        github: 'https://github.com/kunalkeshan'
    },
};

export default config;
