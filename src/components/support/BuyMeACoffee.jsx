/**
 * Buy Me a Coffee Button
 */

// Dependencies
import React from 'react';
import ReactGA from 'react-ga'

// MUI
import { Box, styled, Typography, Link } from '@mui/material';

// Hooks
import useGA from '../../hooks/useGA';


const BuyMeACoffee = () => {

    useGA();

    const handleClick = () => {
        ReactGA.event({
            category: 'Navigate External',
            action: 'Clicked on Buy Me a Coffee',
        });
    }

    return (
        <Button target="_blank" href="https://www.buymeacoffee.com/kunalkeshan" onClick={handleClick}>
            <Image component='img' src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" />
            <Text>Buy me a coffee</Text>
        </Button>
    )
};

const Button = styled(Link)({
    textDecoration: 'none',
    display: 'inline-flex',
    color: '#FFFFFF',
    backgroundColor: '#FF813F',
    borderRadius: '5px',
    border: '1px solid transparent',
    padding: '0.7rem 1rem 0.7rem 1rem',
    boxShadow: '0px 1px 2px rgba(190, 190, 190, 0.5)',
    transition: '0.3s all linear',
    fontFamily: 'cursive',
    width: 'fit-content',
    '&:hover, &:active, &:focus': {
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

export default BuyMeACoffee