/**
 * Call To Action 
 */

// Dependencies
import React from 'react';
import config from '../../config';

// MUI
import { SpeedDial, SpeedDialAction, styled } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

const CallToAction = () => {

    const actions = [
        {
            name: 'Share with Whatsapp',
            url: `whatsapp://send?text=Check out ${window.location.protocol}//${window.location.host} for latest notes for B.Tech ECE Course! `,
            icon: <WhatsAppIcon sx={{ '&:hover': { color: '#25D366 !important' } }} />
        },
        {
            name: 'Share with Twitter',
            url: `http://twitter.com/share?text=Check out this website to get the best ECE Notes available out there! @_kunalkeshan_&url=${window.location.protocol}//${window.location.host}&hashtags=srmist,ece,btech,kunalkeshan`,
            icon: <TwitterIcon sx={{ '&:hover': { color: '#1DA1F2 !important' } }} />
        }
    ];

    const handleClick = (url) => () => {
        window.open(url, '_blank')
    };

    const handleShare = () => {
        const shareData = {
            title: 'B.Tech ECE Notes.',
            text: 'Collection of all B.Tech ECE Notes for the academic year 2020-24. Contribute to the notes by visiting the GitHub Repo of this Project. Made with ♥ by Kunal Keshan.',
            url: `${window.location.protocol}//${window.location.host}`
        };
        navigator.share(shareData);
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
            {navigator.canShare() && <SpeedDialAction
                icon={<ShareIcon />}
                onClick={handleShare}
                tooltipTitle={'Choose how you want to Share!'}
            />}
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