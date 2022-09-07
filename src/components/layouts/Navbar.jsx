/**
 * Navbar Component
 */

// Dependencies
import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import config from '../../config';

// MUI
import { Box, Menu, MenuItem, IconButton, styled, Typography, Button } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import GitHubIcon from '@mui/icons-material/GitHub';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

// Components
import Notifications from '../notification/Notifications';

// Hooks
import useGA from '../../hooks/useGA';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentPage, setCurrentPage] = useState('');
    const open = useMemo(() => Boolean(anchorEl), [anchorEl]);
    const pages = useMemo(() => [
        {
            name: 'Home',
            nav: '/',
            icon: <HomeIcon />,
        },
        {
            name: 'Contribute',
            nav: '/contribute',
            icon: <PersonAddAlt1Icon />,
        },
        {
            name: 'Contact',
            nav: '/contact',
            icon: <AlternateEmailIcon />,
        },
        {
            name: 'Support',
            nav: '/support',
            icon: <VolunteerActivismIcon />,
        },
        {
            name: 'Extra',
            nav: '/extra',
            icon: <ReadMoreIcon />
        },
        {
            name: 'Repo',
            link: 'https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24',
            icon: <GitHubIcon />
        },
        {
            name: 'Drive',
            link: 'https://drive.google.com/drive/folders/17bng9aIkZ3FaULebbgEGpdCsB225dr_K',
            icon: <AddToDriveIcon />
        },
    ], []);

    useGA();

    const activeStyles = useMemo(() => {
        return {
            backgroundColor: config.APP_COLORS.accent,
            color: config.APP_COLORS.dark,
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: config.APP_COLORS.accent,
            }
        }
    }, [])

    useEffect(() => {
        const currentLocation = location.pathname;
        setCurrentPage(currentLocation);
    }, [location]);

    const handleMobNavClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMobNavClose = () => {
        setAnchorEl(null);
    };

    const handleNavigate = ({ link = null, nav = null }) => {
        if (link) {
            const eventData = {
                category: 'Navigate External',
            }
            if (link.includes('github')) eventData.action = 'View Notes in Repo';
            if (link.includes('drive')) eventData.action = 'View Notes in Drive';
            ReactGA.event(eventData);
            window.open(link, '_blank');
        } else {
            navigate(nav);
        }
    }

    const DesktopNav = () => {
        return (
            <DNav
                display={{ xs: 'none', md: 'flex' }}
            >
                <AppIcon>
                    <MenuBookIcon />
                    <Typography
                        variant='h6'
                    >ECE Notes</Typography>
                </AppIcon>
                <DNavList>
                    {pages.map((page, index) => (
                        <DNavButton
                            key={index}
                            variant='text'
                            onClick={() => handleNavigate(page)}
                            sx={page?.nav && page?.nav === currentPage ? activeStyles : {}}
                        >{page.icon} {page.name}</DNavButton>
                    ))}
                </DNavList>
            </DNav>
        );
    };

    const MobileNav = () => {
        return (
            <MNav
                display={{ xs: 'flex', md: 'none' }}
            >
                <IconButton
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleMobNavClick}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMobNavClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {pages.map((page, index) => (
                        <MNavListItem
                            key={index}
                            onClick={() => { handleMobNavClose(); handleNavigate(page) }}
                        >{page.icon} {page.name}</MNavListItem>
                    ))}
                </Menu>
                <AppIcon>
                    <MenuBookIcon />
                    <Typography>ECE Notes</Typography>
                </AppIcon>
            </MNav>
        )
    };

    return (
        <Header component='header'>
            <DesktopNav />
            <MobileNav />
            <Notifications />
        </Header>
    )
};

const Header = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 'min(100%, 1200px)',
    margin: '0 auto',
    padding: '1em',
});

// MNav -> Mobile Nav
const MNav = styled(Box)({
    alignItems: 'center',
    flex: '1',
});

const MNavListItem = styled(MenuItem)({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5em',
    '.MuiSvgIcon-root': {
        fontSize: '1rem',
    }
})

const DNav = styled(Box)({
    alignItems: 'center',
});

const DNavList = styled(Box)({
    marginLeft: '1em',
    display: 'flex',
    alignItems: 'center',
    gap: '.5em',
});

const DNavButton = styled(Button)({
    fontSize: '0.9rem',
    color: config.APP_COLORS.darkAccent,
    display: 'flex',
    alignItems: 'center',
    gap: '0.2em',
    '.MuiSvgIcon-root': {
        fontSize: '0.8rem',
    }
});

const AppIcon = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '1em',
    margin: '0 auto',
});

export default Navbar;