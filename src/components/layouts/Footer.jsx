/**
 * Footer Component
 */

// Dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

// MUI
import { Box, styled, Typography, Link } from '@mui/material';

// Components
import ProjectPartner from '../reuseable/ProjectPartner';

const Footer = () => {
    const navigate = useNavigate();

    const links = [
        {
            name: 'Home',
            nav: '/',
        },
        {
            name: 'Contribute',
            nav: '/contribute',
        },
        {
            name: 'Contact',
            nav: '/contact',
        },
        {
            name: 'Support',
            nav: '/support',
        },
        {
            name: 'Extra',
            nav: '/extra',
        },
        {
            name: 'Issues',
            nav: '/contribute-requests',
        },
        {
            name: 'Repo',
            link: 'https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24',
        },
        {
            name: 'Drive',
            link: 'https://drive.google.com/drive/u/7/folders/17bng9aIkZ3FaULebbgEGpdCsB225dr_K',
        },
        {
            name: 'Give Feedback',
            link: config.GOOGLE_FORM_FEEDBACK_URL,
        }
    ];

    const handleNavigate = ({ link = null, nav = null }) => {
        if (link) {
            window.open(link, '_blank');
        } else {
            navigate(nav);
        }
    }

    return (
        <Main component='footer'>
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
                        href='https://kunalkeshan.dev'
                        target='_blank'
                        sx={{
                            cursor: 'pointer',
                        }}
                    >Kunal Keshan</Link>
                }.
            </Typography>
            <NavLinks>
                {links.map((link, index) => (
                    <Link
                        key={index}
                        component='a'
                        onClick={() => handleNavigate(link)}
                        sx={{
                            cursor: 'pointer',
                            fontSize: '0.8rem',
                        }}
                    >{link.name}</Link>
                ))}
            </NavLinks>
            <Box m={2}>
                <Typography variant='caption' lineHeight={0}>Project Partners:</Typography>
                <ProjectPartnersContainer>
                    {config.APP_PARTNERS.map((partner, index) => (
                        <ProjectPartner {...partner} key={index} scale={0.4} />
                    ))}
                </ProjectPartnersContainer>
            </Box>
        </Main>
    )
}

const Main = styled(Box)({
    marginTop: 'auto',
    padding: '.5em',
    textAlign: 'center',
});

const NavLinks = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1em',
    flexWrap: 'wrap',
    margin: '0.5em',
});

const ProjectPartnersContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export default Footer;
