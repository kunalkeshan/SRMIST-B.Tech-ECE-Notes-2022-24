/**
 * App Notifications
 */

// Dependencies
import React, { useMemo, useState, useEffect } from 'react'

// MUI
import { Box, styled, Tooltip, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

// Custom
import Data from '../../utils/data';
import NotificationDialog from './Dialog';

const Notifications = () => {
    const [open, setOpen] = useState(false);
    const [notifications, setNotifications] = useState([]);

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
        setOpen(true);
    };

    return (
        <NotificationsContainer>
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

const NotificationsContainer = styled(Box)({});

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