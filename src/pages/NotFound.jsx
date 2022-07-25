/**
 * Not Found Page
 */

// Dependencies
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router';
import Lottie from 'react-lottie';
import config from '../config';

// MUI
import { Box, styled, Button } from '@mui/material';

// Custom 
import NotFoundAnimationData from '../assets/lottie/404-not-found-page.json';

const NotFound = () => {
    const navigate = useNavigate();

    const defaultOptions = useMemo(() => {
        return {
            loop: true,
            autoplay: true,
            animationData: NotFoundAnimationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        }
    }, []);

    const handleNavigate = () => {
        navigate('/')
    };

    return (
        <Container>
            <Lottie
                options={defaultOptions}
                width='clamp(200px, 100%, 800px)'
                height='auto'
            />
            <Content>
                <GoBackButton
                    variant='contained'
                    onClick={handleNavigate}
                >Go Back Home</GoBackButton>
            </Content>
        </Container>
    )
}

const Container = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
});

const Content = styled(Box)({
    padding: '1em',
    margin: '1em',
});

const GoBackButton = styled(Button)({
    backgroundColor: config.APP_COLORS.accent,
    '&:hover': {
        backgroundColor: config.APP_COLORS.accent,
    }
});

export default NotFound;