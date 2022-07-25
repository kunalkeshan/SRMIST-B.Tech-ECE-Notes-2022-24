/**
 * Use GA Hook
 */

// Dependencies
import { useEffect } from "react";
import ReactGA from 'react-ga';
import config from "../config";

const useGA = () => {
    useEffect(() => {
        if (!window.location.href.includes("localhost")) {
            ReactGA.initialize(config.GA_TRACKING_ID);
        }
    }, []);
};

export default useGA;