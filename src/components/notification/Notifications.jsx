/**
 * App Notifications
 */

// Dependencies
import React, { useMemo, useState, useEffect } from 'react'
import ReactGA from 'react-ga';
import { useNavigate } from 'react-router-dom';

// MUI
import { Box, styled, Tooltip, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

// Hooks
import useGA from '../../hooks/useGA';

// Custom
import Data from '../../utils/data';
import NotificationDialog from './Dialog';

const Notifications = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [notifications, setNotifications] = useState([]);

    useGA();

    const unReadCount = useMemo(() => {
        if (!notifications.length) return;
        return notifications.filter((notification) => !notification.read).length;
    }, [notifications]);

    useEffect(() => {
        const handleGetNotifications = async () => {
            const data = await Data.Notification.getAllNotification();
            setNotifications(data);
        };
        if (notifications.length === 0) handleGetNotifications();
    }, [notifications]);

    const handleClickOpen = () => {
        ReactGA.modalview('/notifications');
        setOpen(true);
    };

    const handleNavigateToSearch = () => {
        ReactGA.modalview('/search');
        navigate('/search')
    }

    return (
        <NotificationsContainer>
            <SearchButton onClick={handleNavigateToSearch}>
                <Tooltip title='Search notes'>
                    <SearchIcon />
                </Tooltip>
            </SearchButton>
            <NotificationsButton onClick={handleClickOpen}>
                <Tooltip title='View Notifications'>
                    <Badge badgeContent={unReadCount ?? 0} color='primary'>
                        <NotificationsIcon />
                    </Badge>
                </Tooltip>
            </NotificationsButton>
            <NotificationDialog
                open={open}
                setOpen={setOpen}
                notifications={notifications}
                setNotifications={setNotifications}
            />
        </NotificationsContainer>
    )
}

const NotificationsContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
});

const SearchButton = styled(Box)({
    cursor: 'pointer',
    padding: '.25em',
    borderRadius: '50%',
    transition: 'all 200ms',
    '&:hover': {
        backgroundColor: '#80808040',
    }
})

const NotificationsButton = styled(Box)({
    cursor: 'pointer',
    padding: '.25em',
    borderRadius: '50%',
    transition: 'all 200ms',
    '&:hover': {
        backgroundColor: '#80808040',
    }
});

export default Notifications;