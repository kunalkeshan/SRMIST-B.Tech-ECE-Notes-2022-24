/**
 * Navbar Component
 */

// Dependencies
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom'

// MUI
import { Box, Menu, MenuItem, IconButton, styled, Typography, Button } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MenuIcon from '@mui/icons-material/Menu';

// Components
import Notifications from '../notification/Notifications';

const Navbar = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = useMemo(() => Boolean(anchorEl), [anchorEl]);
    const pages = useMemo(() => [
        {
            name: 'Home',
            navigate: '/',
        },
        {
            name: 'Repo',
            link: 'https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24',
        },
        {
            name: 'Drive',
            link: 'https://drive.google.com/drive/folders/17bng9aIkZ3FaULebbgEGpdCsB225dr_K',
        },
        {
            name: 'Contribute',
            navigate: '/contribute'
        }
    ], []);

    const handleMobNavClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMobNavClose = () => {
        setAnchorEl(null);
    };

    const handleNavigate = ({ link, navigate }) => {
        if (link) {
            window.open(link, '_blank');
        } else {
            navigate(navigate)
        }
    }

    const DesktopNav = () => {
        return (
            <DNav
                display={{ xs: 'none', md: 'flex' }}
            >
                <AppIcon>
                    <MenuBookIcon />
                    <Typography>ECE Notes</Typography>
                </AppIcon>
                <DNavList>
                    {pages.map((page) => (
                        <DNavButton
                            onClick={() => handleNavigate(page)}
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
                    {pages.map((page) => (
                        <MenuItem
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
    display: 'flex',
    alignItems: 'center',
});

const DNavButton = styled(Button)({});

const AppIcon = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '1em',
    margin: '0 auto',
});

export default Navbar;