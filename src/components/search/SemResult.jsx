/**
 * All Semesters - Search Result Component
 */

// Dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

import { Paper, styled, Typography, Grid } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

const SemResult = ({ name }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        const semUrl = name.toLowerCase().replace(' ', '-');
        const navUrl = `/notes/${semUrl}`;
        navigate(navUrl);
    }

    return (
        <Grid item xs={12}>
            <Main elevation={3} onClick={handleNavigate}>
                <Typography variant='h6' noWrap>{name}</Typography>
                <LaunchIcon />
            </Main>
        </Grid>
    )
}

const Main = styled(Paper)({
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.25em 0.75em',
    '&:hover': {
        background: config.APP_COLORS.accent
    }
})

export default SemResult;