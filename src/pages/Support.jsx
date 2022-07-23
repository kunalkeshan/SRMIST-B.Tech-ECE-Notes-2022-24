/**
 * Support Page
 */

// Dependencies
import React from 'react';

// MUI
import { Box, styled, Typography, Divider } from '@mui/material';

const Support = () => {
    return (
        <Main>
            <Typography variant='h1' fontSize='4rem'>Support</Typography>
            <Divider />
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

export default Support;