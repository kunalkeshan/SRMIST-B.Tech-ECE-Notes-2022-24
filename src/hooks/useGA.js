/**
 * Use GA Hook
 */

// Dependencies
import { useEffect } from "react";
import ReactGA from 'react-ga';
import config from "../config";

const useGA = () => {
    useEffect(() => {
        if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
            ReactGA.initialize(config.GA_TRACKING_ID);
        }
    }, []);
};

export default useGA;