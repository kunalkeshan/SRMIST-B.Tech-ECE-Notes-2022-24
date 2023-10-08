/**
 * Home - Contribute Page
 */

// Dependencies
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

// MUI
import { Box, styled, Typography, Divider, Button, Paper, Avatar, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

// Custom
import { fetchProjectContributorsList } from '../../utils/axios';

const Contribute = () => {
    const navigate = useNavigate();
    const [contributors, setContributors] = useState([]);

    const handleNavigateToContribute = () => {
        navigate('/contribute');
    }

    const handleNavigateToContributeRequests = () => {
        navigate('/contribute-requests');
    }

    useEffect(() => {
        const handleFetchContributors = async () => {
            const data = await fetchProjectContributorsList();
            setContributors(data);
        };
        if (contributors.length === 0) handleFetchContributors();
    }, [contributors]);

    const ContributorProfile = ({ avatar, contributions, profile, username }) => {

        const handleNavigate = () => {
            window.open(profile, '_blank');
        };

        return (
            <ContributorCard
                onClick={handleNavigate}
            >
                <Tooltip title={`Visit ${username}'s Profile, contributions made: ${contributions}`}>
                    <Box
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        flexDirection={'column'}
                        width='100%'
                        height='100%'
                    >
                        <Avatar
                            src={avatar}
                            alt={username}
                            variant='rounded'
                        />
                        <Typography variant='caption'>{username}</Typography>
                    </Box>
                </Tooltip>
            </ContributorCard>
        )
    }

    return (
        <Page>
            <Content>
                <Typography variant='h3' fontSize='2rem'>Contribute</Typography>
                <Divider variant='fullWidth' />
                <Typography variant='body1' fontSize='1.25rem' mt={2}>This Project is <b>Open Source</b>! That means that you're free to contribute and make changes that you feel would improve the quality of this project.</Typography>
                <Typography>To learn how to contribute, click the button below to explore more.</Typography>

                <ContributeButton
                    variant='contained'
                    startIcon={<GitHubIcon />}
                    onClick={handleNavigateToContribute}
                >Contribute Now!</ContributeButton>
                <ContributeButton
                    variant='contained'
                    startIcon={<GitHubIcon />}
                    onClick={handleNavigateToContributeRequests}
                >View Contributing Requests!</ContributeButton>

                <Typography variant='body1' fontSize='1.25rem' mt={2}>Meet our Contributors!</Typography>
                <Typography variant='caption'>Without whom this project would not be possible!</Typography>
                <Contributors>
                    {contributors.length > 0 ? contributors.map((person, index) => (
                        <ContributorProfile {...person} key={index} />
                    )) : null}
                </Contributors>
            </Content>
        </Page>
    )
};

const Page = styled(Box)({
    position: 'relative',
    width: 'min(100%, 800px)',
    height: 'fit-content',
    padding: '2em 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const Content = styled(Box)({
    width: '100%',
    textAlign: 'center',
});

const ContributeButton = styled(Button)({
    margin: '1em',
    backgroundColor: config.APP_COLORS.accent,
    color: config.APP_COLORS.darkAccent,
    '&:hover': {
        backgroundColor: config.APP_COLORS.accent,
        color: config.APP_COLORS.dark,
    }
});

const Contributors = styled(Box)({
    padding: '1em',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1em',
});

const ContributorCard = styled(Paper)({
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    padding: '1em',
    width: '100px',
    height: '100px',
    overflow: 'hidden',
    whiteSpace: 'no-wrap',
    textOverflow: 'ellipsis',
    '&:hover': {
        backgroundColor: config.APP_COLORS.accent,
    }
})

export default Contribute;
