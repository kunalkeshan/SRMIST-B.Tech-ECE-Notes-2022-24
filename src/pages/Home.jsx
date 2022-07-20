/**
 * Home Page
 */

// Dependencies
import React from 'react';

// MUI
import { Box, styled } from '@mui/material';

// Components
import Landing from '../components/home/Landing';
import AllSems from '../components/home/AllSems';
import Contribute from '../components/home/Contribute';

const Home = () => {
    return (
        <Main>
            <Landing />
            <AllSems />
            <Contribute />
        </Main>
    )
}

const Main = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '> *': {
        width: '100%',
    }
});

export default Home;