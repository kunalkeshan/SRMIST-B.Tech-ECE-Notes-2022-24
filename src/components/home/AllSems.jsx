/**
 * Home - All Semesters Navigate
 */

// Dependencies
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../config';
import Data from '../../utils/data';

// MUI
import { Box, styled, Card, CardActions, CardContent, Button, Grid, Typography, Divider, Avatar } from '@mui/material';

const AllSems = () => {
    const navigate = useNavigate();
    const [semesters, setSemesters] = useState([]);

    useEffect(() => {
        const handleGetSemesters = async () => {
            const data = await Data.Semesters.getAllSemesters();
            setSemesters(data);
        };
        if (semesters.length === 0) handleGetSemesters();
    }, [semesters]);

    const SemesterCard = ({ id, credits, name, numberOfCourses }) => {
        const navigateLink = name.replace(/\W+/, '-').toLowerCase();

        const handleNavigateToSem = () => {
            navigate(`/notes/${navigateLink}`);
        }

        return (
            <Grid item xs={12} sm={8} md={3} mx='auto'>
                <Card sx={{ width: '100%', height: 'fit-content' }}>
                    <CardContent>
                        <Typography variant='h6' display='flex' alignItems='center' gap={2}>
                            <Avatar sx={{ width: '20px', height: '20px', fontSize: '1rem', }}>{id}</Avatar>
                            {name}
                        </Typography>
                        <Divider />
                        <Typography mt={2}>Credits: {credits}</Typography>
                        <Typography>Number of Courses: {numberOfCourses}</Typography>
                    </CardContent>
                    <CardActions>
                        <ViewNotesButton
                            variant='text'
                            onClick={handleNavigateToSem}
                        >View Notes</ViewNotesButton>
                    </CardActions>
                </Card>
            </Grid>
        )
    };

    return (
        <Page id='semesters'>
            <Typography
                variant='h3'
                fontSize='2rem'
                textAlign='center'
                mt={2}
            >All Semester Links</Typography>
            <Divider variant='fullWidth' />
            <Grid container spacing={2} gap={2}>
                {semesters.length > 0 ? semesters.map((sem, index) => (
                    <SemesterCard
                        key={index}
                        {...sem}
                    />
                )) : null}
            </Grid>
        </Page>
    )
};

const Page = styled(Box)({
    position: 'relative',
    width: 'min(100%, 1200px)',
    height: 'max(100vh, fit-content)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
});

const ViewNotesButton = styled(Button)({
    color: config.APP_COLORS.accent,
});

export default AllSems;