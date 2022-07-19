/**
 * App Notifications
 */

// Dependencies
import React from 'react'

// MUI
import { Box, styled, Tooltip, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Notifications = () => {
    return (
        <NotificationsButton>
            <Tooltip title='View Notifications'>
                <Badge badgeContent={1} color='primary'>
                    <NotificationsIcon />
                </Badge>
            </Tooltip>
        </NotificationsButton>
    )
}

const NotificationsButton = styled(Box)({
    cursor: 'pointer',
})

export default Notifications;