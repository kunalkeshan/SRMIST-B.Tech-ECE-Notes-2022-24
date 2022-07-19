/**
 * Application Config
 */

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const config = {
    WEBSITE_URL: `${window.location.protocol}//${window.location.host}`,
    GITHUB_URL: 'https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24',
    CONTRIBUTORS_URL: `https://api.github.com/repos/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24/contributors?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
}

export default config;
