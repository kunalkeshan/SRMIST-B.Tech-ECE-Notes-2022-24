/**
 * Home - All Semesters Navigate
 */

// Dependencies
import React from 'react';

// MUI
import { Box, styled } from '@mui/material';

const AllSems = () => {
    return (
        <Page id='semesters'></Page>
    )
};

const Page = styled(Box)({
    position: 'relative',
    width: 'min(100%, 800px)',
    height: '100vh',
    display: 'flex',
})

export default AllSems