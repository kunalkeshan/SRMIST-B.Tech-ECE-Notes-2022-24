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
                {" "}
                <Link
                    component='a'
                    href='https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24/blob/main/LICENSE'
                    target='_blank'
                    sx={{
                        cursor: 'pointer',
                    }}
                >
                    ECE College Notes
                </Link>
                {" "} &copy; {new Date().getFullYear()}
                {" "}.
                Made with &#129505; by {" "}
                {
                    <Link
                        component='a'
                        href='https://twitter.com/_kunalkeshan_'
                        target='_blank'
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
    padding: '.5em',
})

export default Footer;