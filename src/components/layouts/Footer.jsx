/**
 * Footer Component
 */

// Dependencies
import React from 'react'

// MUI
import { Box, styled, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Main>
            <Typography variant='body2'>
                All Rights Reserved.
                &copy; {new Date().getFullYear()}
                {" "}.
                Made with &#129505; by {" "}
                {
                    <Link
                        component='a'
                        sx={{
                            cursor: 'pointer',
                        }}
                    >Kunal Keshan</Link>
                }.
            </Typography>
        </Main>
    )
}

const Main = styled(Box)({
    marginTop: 'auto',
    padding: '.25em',
})

export default Footer;