/**
 * Home - Contribute Page
 */

// Dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

// MUI
import { Box, styled, Typography, Divider, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contribute = () => {
    const navigate = useNavigate();

    const handleNavigateToContribute = () => {
        navigate('/contribute');
    }

    return (
        <Page>
            <Content>
                <Typography variant='h3' fontSize='2rem'>Contribute</Typography>
                <Divider variant='fullWidth' />
                <Typography variant='body1' fontSize='1.25rem' mt={2}>This Project is <b>Open Source</b>! That means that you're free to contribute and make changes that you feel would improve the quality of this project.</Typography>
                <Typography>To learn how to contribute, click to button below to explore more.</Typography>
                <ContributeButton
                    variant='contained'
                    startIcon={<GitHubIcon />}
                    onClick={handleNavigateToContribute}
                >Contribute Now!</ContributeButton>
            </Content>
        </Page>
    )
};

const Page = styled(Box)({
    position: 'relative',
    width: 'min(100%, 800px)',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const Content = styled(Box)({
    width: '100%',
    textAlign: 'center',
});

const ContributeButton = styled(Button)({
    marginTop: '1em',
    backgroundColor: config.APP_COLORS.accent,
    color: config.APP_COLORS.darkAccent,
    '&:hover': {
        backgroundColor: config.APP_COLORS.accent,
        color: config.APP_COLORS.dark,
    }
});

export default Contribute;