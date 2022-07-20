/**
 * Home Landing Page
 */

// Dependencies
import React from 'react';
import Lottie from 'react-lottie';
import config from '../../config';

// MUI
import { Box, styled, Typography, Divider, Button } from '@mui/material';

// Custom
import WritingAnimation from '../../assets/lottie/writing.json';

const Landing = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: WritingAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Page>
            <Background>
                <Lottie
                    options={defaultOptions}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </Background>
            <Content>
                <Typography
                    variant='h1'
                    fontSize='4rem'
                    fontWeight='500'
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
                <ViewSemButton href='#semesters'>View Semester Notes</ViewSemButton>
            </Content>
        </Page>
    )
};

const Page = styled(Box)({
    position: 'relative',
    width: 'min(100%, 800px)',
    height: '100vh',
    display: 'flex',
});

const Background = styled(Box)({
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 'clamp(200px, 100%, 800px)',
    opacity: '0.25',
    height: 'auto'
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

export default Landing;