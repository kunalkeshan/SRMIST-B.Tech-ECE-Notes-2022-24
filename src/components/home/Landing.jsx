/**
 * Home Landing Page
 */

// Dependencies
import React from 'react';
import config from '../../config';

// MUI
import { Box, styled, Typography, Divider, Button } from '@mui/material';

// Components
import ProjectPartner from '../reuseable/ProjectPartner';

const Landing = () => {

    const handleViewSemScroll = () => {
        const currentWindowHeight = window.innerHeight;
        window.scroll({ behavior: 'smooth', top: currentWindowHeight })
    };

    return (
        <Page>
            <Content>
                <Typography
                    variant='h1'
                    fontSize='4rem'
                    fontWeight='600'
                >B.Tech ECE Notes</Typography>
                <Typography
                    variant='h2'
                    fontSize='2.5rem'
                    fontWeight='400'
                >SRMIST, Academic Year: 2020-24 Notes</Typography>
                <Divider variant='middle' />
                <Typography
                    variant='body1'
                    fontSize='1.5rem'
                    mt={2}
                >
                    Collection of all notes of SRMIST B.Tech Electronics and Communications Dept. for the academic year: 2020-24.
                    Visit the Repository or Drive to access all notes, additional resources for studying and how to study each subject.
                </Typography>
                <ViewSemButton onClick={handleViewSemScroll}>View Semester Notes</ViewSemButton>
                <Box m={2}>
                    <Typography>Project Partners</Typography>
                    <Divider variant='inset' />
                    <ProjectPartnersContainer>
                        {config.APP_PARTNERS.map((partner, index) => (
                            <ProjectPartner {...partner} key={index} />
                        ))}
                    </ProjectPartnersContainer>
                </Box>
            </Content>
        </Page>
    )
};

const Page = styled(Box)({
    width: 'min(100%, 800px)',
    height: '100vh',
    display: 'flex',
    transition: 'all 200ms',
    '@media (max-width: 600px)': {
        transform: 'scale(0.9)'
    },
    '@media (max-width: 400px)': {
        transform: 'scale(0.8)'
    }
});

const Content = styled(Box)({
    padding: '1em',
    textAlign: 'center',
    margin: 'auto',
    zIndex: '10',
    color: config.APP_COLORS.dark,
});

const ViewSemButton = styled(Button)({
    fontSize: '1.5rem',
    marginTop: '1.5em',
    backgroundColor: config.APP_COLORS.accent,
    color: config.APP_COLORS.darkAccent,
    padding: '0.25em 1em',
    transition: 'all 200ms',
    '&:hover': {
        transform: 'scale(1.05)',
        color: config.APP_COLORS.dark,
        backgroundColor: config.APP_COLORS.accent,
    }
});

const ProjectPartnersContainer = styled(Box)({
    margin: 2,
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
});

export default Landing;