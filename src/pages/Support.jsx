/**
 * Support Page
 */

// Dependencies
import React from 'react';

// MUI
import { Box, styled, Typography, Divider } from '@mui/material';

// Custom
import TeaGif from '../assets/tea-animation.gif';
import BuyMeACoffee from '../components/support/BuyMeACoffee';
import BecomeAPatreon from '../components/support/BecomeAPatreon';

const Support = () => {

    return (
        <Main>
            <Typography variant='h1' fontSize='4rem'>Support</Typography>
            <Divider />

            <Content>
                <Animation
                    display={{ xs: 'none', md: 'block' }}
                >
                    <img
                        src={TeaGif}
                        alt='Contact gif'
                        width='100%'
                        height='100%'
                        style={{
                            backgroundColor: 'transparent',
                        }}
                    />
                </Animation>
                <SupportContent
                    width={{ xs: '100%', md: '50%' }}
                >
                    <Typography variant='body1'>When I joined college, I hardly had any access to notes and question papers to practice from. I had to wait for the teachers to share them and wait until the exam to have a collection of question papers at my disposal.</Typography>
                    <Typography variant='body1'>I started this project in my third year, with the philosophy</Typography>
                    <Typography variant='body1' fontWeight={600} fontSize='1.5rem'><q>Be the Senior you needed the most as a Junior.</q></Typography>
                    <Typography variant='body1'>Any one is free to access the resources of this project and I intend to keep it that way.</Typography>
                    <Typography variant='body1'>If you like the work I am doing, and want to keep the project active, your support would mean a lot. Buying me a coffee would mean a 1000 times more than a Thank You!</Typography>
                    <Box className='supportButtons'>
                        <BuyMeACoffee />
                        <BecomeAPatreon />
                    </Box>
                </SupportContent>
            </Content>
        </Main>
    )
};

const Main = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '> *': {
        width: '100%',
    }
});

const Content = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '1em',
});

const Animation = styled(Box)({
    width: '50%',
    maxWidth: '440px',
    height: 'auto'
});

const SupportContent = styled(Box)({
    padding: '1em',
    width: '50%',
    background: 'rgba( 255, 255, 255, 0.4 )',
    backdropFilter: 'blur(4px)',
    webkitBackdropFilter: 'blur(4px)',
    borderRadius: '8px',
    marginTop: '1em',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25em',
    '.supportButtons': {
        display: 'flex',
        gap: '1em',
    }
});

export default Support;