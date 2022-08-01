/**
 * Project Partner Component
 */

// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config';

// MUI
import { Typography, Paper, styled, Avatar, Tooltip } from '@mui/material';

const ProjectPartner = ({ name, url, logo, scale }) => {

    const handleNavigate = () => {
        window.open(url, '_blank');
    };

    return (
        <Tooltip title={`Learn more about ${name}!`}>
            <Container
                onClick={handleNavigate}
                sx={{ transform: `scale(${scale})`, }}
            >
                <Avatar src={logo} alt={name} />
                <Typography>{name}</Typography>
            </Container>
        </Tooltip>
    )
}

const Container = styled(Paper)({
    display: 'flex',
    alignItems: 'center',
    padding: '0.25em 0.5em',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 250ms ease-in-out',
    width: 'clamp(100px, 100%, 200px)',
    '&:hover': {
        backgroundColor: config.APP_COLORS.accent,
    }
});

export default ProjectPartner;

ProjectPartner.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    scale: PropTypes.number.isRequired,
};

ProjectPartner.defaultProps = {
    scale: 1,
}