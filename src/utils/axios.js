/**
 * Axios Configuration
 */

// Dependencies
import axios from "axios";
import config from "../config";

export const fetchProjectContributorsList = async () => {
    try {
        let contributors = sessionStorage.getItem('contributors') ? JSON.parse(sessionStorage.getItem('contributors')) : null;
        if (!contributors) {
            const response = await axios.get(config.CONTRIBUTORS_URL);
            contributors = response.data.map((account) => {
                return {
                    username: account.login,
                    avatar: account.avatar_url,
                    profile: account.html_url,
                    contributions: account.contributions,
                }
            });
            sessionStorage.setItem('contributors', JSON.stringify(contributors));
        }
        return contributors;
    } catch (error) {
        return [];
    }
};