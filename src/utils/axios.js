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

export const fetchProjectIssuesList = async () => {
    try {
        let issues = sessionStorage.getItem('issues') ? JSON.parse(sessionStorage.getItem('issues')) : null;
        if (!issues) {
            const response = await axios.get(config.ISSUES_URL);
            issues = response.data.map((issue) => {
                return {
                    url: issue.html_url,
                    state: issue.state,
                    title: issue.title,
                    body: issue.body,
                    labels: issue.labels,
                    createdAt: issue.created_at,
                    updatedAt: issue.updated_at,
                }
            });
            sessionStorage.setItem('issues', JSON.stringify(issues));
        };
        return issues;
    } catch (error) {
        console.log(error);
        return [];
    }
}