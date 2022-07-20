/**
 * Navbar Component
 */

// Dependencies
import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import config from '../../config';

// MUI
import { Box, Menu, MenuItem, IconButton, styled, Typography, Button } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MenuIcon from '@mui/icons-material/Menu';

// Components
import Notifications from '../notification/Notifications';

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
        },
        {
            name: 'Contribute',
            nav: '/contribute'
        },
        {
            name: 'Repo',
            link: 'https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24',
        },
        {
            name: 'Drive',
            link: 'https://drive.google.com/drive/folders/17bng9aIkZ3FaULebbgEGpdCsB225dr_K',
        },
    ], []);
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
                        >{page.name}</DNavButton>
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
                        <MenuItem
                            key={index}
                            onClick={() => { handleMobNavClose(); handleNavigate(page) }}
                        >{page.name}</MenuItem>
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
});

const AppIcon = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '1em',
    margin: '0 auto',
});

export default Navbar;