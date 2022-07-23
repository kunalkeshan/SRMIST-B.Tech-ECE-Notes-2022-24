/**
 * Contribute Page
 */

// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import config from '../config';

// MUI
import { Box, Divider, styled, Typography, List, ListItem, ListItemText, ListItemIcon, Card, CardActions, CardContent, Button } from '@mui/material';
import HdrStrongIcon from '@mui/icons-material/HdrStrong';
import GitHubIcon from '@mui/icons-material/GitHub';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import WebIcon from '@mui/icons-material/Web';

const Contribute = () => {
    const contributionExamples = [
        "Typo in some Documentation or README.md file.",
        "Adding new and updated notes to this project.",
        "Removing Irrelevant content.",
        "Adding new features to this website.",
        "Managing bug fixes that you can fix."
    ];

    const contributionData = [
        {
            name: 'Contribute to Notes!',
            description: 'For changes related to the notes and study material, visit this link to make those switches.',
            repoUrl: 'https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24/tree/main',
            contributeUrl: 'https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24/blob/main/CONTRIBUTING.md',
            icon: <LibraryBooksIcon />,
        },
        {
            name: 'Contribute to this Website!',
            description: 'For changes related to this website, visit the following link to develop and integrate what you think can improve this website.',
            repoUrl: 'https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24/tree/client',
            contributeUrl: 'https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24/blob/client/CONTRIBUTING.md',
            icon: <WebIcon />,
        }
    ];

    const ContributeCard = ({ name, description, repoUrl, contributeUrl, icon }) => {

        const handleNavigate = (url) => () => {
            window.open(url, '_blank');
        };

        return (
            <Card sx={{ width: 'clamp(200px, 100%, 560px)' }}>
                <CardContent>
                    <Typography
                        variant='body1'
                        fontSize='1.25rem'
                        display='flex'
                        alignItems='center'
                        gap={2}
                    >{icon} {name}</Typography>
                    <Typography variant='body2' fontSize='1rem'>{description}</Typography>
                </CardContent>
                <CardActions>
                    <ContributeButton variant='text' onClick={handleNavigate(contributeUrl)}>How to Contribute?</ContributeButton>
                    <RepoButton variant='contained' onClick={handleNavigate(repoUrl)}>Visit Repo.</RepoButton>
                </CardActions>
            </Card>
        )
    };

    return (
        <Main>
            <Typography variant='h1' fontSize='4rem'><GitHubIcon fontSize='inherit' /> Contribute</Typography>
            <Divider />
            <Typography variant='body1' fontSize='2rem'>This project is <b>Open Source</b>! That means that you're free to contribute and make changes that you feel would improve the quality of this project.</Typography>
            <Typography variant='body1' fontSize='1rem'>If you don't know how to work with GitHub, and have things you want to contribute or make changes to, <Link to='/contact'>contact me</Link> to get those changes.</Typography>
            <Typography variant='body1' fontSize='1.5rem'>Some examples of places where you can contribute:</Typography>
            <List>
                {contributionExamples.map((example, index) => (
                    <ListItem key={index} disablePadding disableGutters>
                        <ListItemIcon><HdrStrongIcon /></ListItemIcon>
                        <ListItemText>
                            {example}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
            <Typography variant='body1' fontSize='1.5rem'>This project is hosted at GitHub, you can contribute in any two ways mentioned below:</Typography>
            <CardContainer>
                {contributionData.map((data, index) => (
                    <ContributeCard key={index} {...data} />
                ))}
            </CardContainer>
        </Main>
    );
};

const Main = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1em',
    width: '100%',
    marginBottom: '80px',
    height: 'max(100vh, fit-content)',
    '> *': {
        width: '100%',
    }
});

const CardContainer = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: '1em',
});

const ContributeButton = styled(Button)({});

const RepoButton = styled(Button)({
    backgroundColor: config.APP_COLORS.accent,
    color: config.APP_COLORS.darkAccent,
    '&:hover': {
        backgroundColor: config.APP_COLORS.accent,
        color: config.APP_COLORS.dark,
    }
});

export default Contribute