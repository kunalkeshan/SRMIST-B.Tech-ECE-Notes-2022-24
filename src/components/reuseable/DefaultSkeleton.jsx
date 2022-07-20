/**
 * Skeleton
 */

// Dependencies
import React from 'react';

// MUI
import { Box, styled } from '@mui/material';

const DefaultSkeleton = () => {
    return (
        <Page>Loading...</Page>
    )
};

const Page = styled(Box)({
    position: 'relative',
    width: 'min(100%, 800px)',
    height: '100vh',
    display: 'flex',
});

export default DefaultSkeleton