/**
 * Become a Patreon Button
 */

// Dependencies
import React from 'react';

// MUI
import { Box, styled, Typography, Link } from '@mui/material';

// Custom
import patreonSvg from './patreon.svg'

const BecomeAPatreon = () => {
    return (
        <Button target="_blank" href="https://www.patreon.com/bePatron?u=72210783">
            <Image component='img' src={patreonSvg} alt="Become a Patreon" />
            <Text>Become a Patreon</Text>
        </Button>
    )
};

const Button = styled(Link)({
    textDecoration: 'none',
    display: 'inline-flex',
    color: '#FFFFFF',
    backgroundColor: '#E1000A',
    borderRadius: '5px',
    border: '1px solid transparent',
    padding: '0.7rem 1rem 0.7rem 1rem',
    boxShadow: '0px 1px 2px rgba(190, 190, 190, 0.5)',
    transition: '0.3s all linear',
    fontFamily: 'cursive',
    width: 'fit-content',
    '&:hover, &:active, &:focus': {
        backgroundColor: '#E1000D',
        textDecoration: 'none',
        boxShadow: '0px 1px 2px 2px rgba(190, 190, 190, 0.5)',
        opacity: '0.85',
        color: '#FFFFFF',
    }
});

const Image = styled(Box)({
    height: '20px',
    width: '21px',
    boxShadow: 'none',
    border: 'none',
    verticalAlign: 'middle',
})

const Text = styled(Typography)({
    marginLeft: '15px',
    fontSize: '1rem',
    verticalAlign: 'middle',
});

export default BecomeAPatreon