/**
 * Call To Action 
 */

// Dependencies
import React from 'react';
import config from '../../config';
import ReactGA from 'react-ga';

// MUI
import { SpeedDial, SpeedDialAction, styled } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import FeedbackIcon from '@mui/icons-material/Feedback';

// Hooks
import useGA from '../../hooks/useGA';

const CallToAction = () => {

    useGA();

    const actions = [
        {
            name: 'Share with Whatsapp',
            url: `whatsapp://send?text=Check out ${window.location.protocol}//${window.location.host}?utm_source=whatsapp.com&utm_medium=social for latest notes for B.Tech ECE Course! `,
            icon: <WhatsAppIcon sx={{ '&:hover': { color: '#25D366 !important' } }} />
        },
        {
            name: 'Share with Twitter',
            url: `http://twitter.com/share?text=Check out this website to get the best ECE Notes available out there! @_kunalkeshan_&url=${window.location.protocol}//${window.location.host}?utm_source=twitter.com&utm_medium=social&hashtags=srmist,ece,btech,kunalkeshan`,
            icon: <TwitterIcon sx={{ '&:hover': { color: '#1DA1F2 !important' } }} />
        },
        {
            name: 'Have some Feedback?',
            url: config.GOOGLE_FORM_FEEDBACK_URL,
            icon: <FeedbackIcon sx={{ '&:hover': { color: `${config.APP_COLORS.main} !important` } }} />
        },
    ];

    const handleClick = (url) => () => {
        const eventData = {
            category: 'Share',
            action: 'Share website through Social Media'
        }
        ReactGA.event(eventData)
        window.open(url, '_blank')
    };

    const handleShare = () => {
        const shareData = {
            title: 'B.Tech ECE Notes.',
            text: 'Collection of all B.Tech ECE Notes for the academic year 2020-24. Contribute to the notes by visiting the GitHub Repo of this Project. Made with ♥ by Kunal Keshan.',
            url: `${window.location.protocol}//${window.location.host}?utm_medium=social`
        };
        if (navigator.canShare(shareData)) navigator.share(shareData);
    }

    return (
        <StyledSpeedDial
            ariaLabel="SpeedDial basic example"
            icon={<ShareIcon />}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    onClick={handleClick(action.url)}
                    tooltipTitle={action.name}
                />
            ))}
            <SpeedDialAction
                icon={<ShareIcon />}
                onClick={handleShare}
                tooltipTitle={'Choose how you want to Share!'}
            />
        </StyledSpeedDial>
    )
};

const StyledSpeedDial = styled(SpeedDial)({
    position: 'fixed',
    bottom: 16,
    right: 16,
    '.MuiButtonBase-root': {
        backgroundColor: 'whitesmoke',
        '.MuiSvgIcon-root': {
            color: config.APP_COLORS.darkAccent
        },
        '&:hover': {
            backgroundColor: config.APP_COLORS.accent,
            '.MuiSvgIcon-root': {
                color: config.APP_COLORS.dark
            },
        }
    }
})

export default CallToAction;