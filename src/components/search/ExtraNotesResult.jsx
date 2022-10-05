/**
 * Extra - Search Result Component
 */

// Dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Paper, styled, Typography, Grid, Box } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

const ExtraNotesResult = ({ title, name }) => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/extra');
    }

    return (
        <Grid item xs={12} onClick={handleNavigate}>
            <Main>
                <Box>
                    <Typography variant='h6' noWrap>{title}</Typography>
                    <Typography variant='caption'>by {name}</Typography>
                </Box>
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
})

export default ExtraNotesResult