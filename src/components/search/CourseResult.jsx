/**
 * Single Course - Search Result Component
 */

// Dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Paper, styled, Typography, Grid } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

const CourseResult = ({ name, subjectCode, belongsTo }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/notes/${belongsTo}`);
    }
    return (
        <Grid item xs={12} onClick={handleNavigate}>
            <Main>
                <Typography variant='h6' noWrap>{name} - {subjectCode}</Typography>
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

export default CourseResult