/**
 * Notifications Dialog
 */

// Dependencies
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Data from '../../utils/data';

// MUI
import { Dialog, DialogTitle, styled, DialogActions, Button, DialogContent, DialogContentText } from '@mui/material';
import CelebrationIcon from '@mui/icons-material/Celebration';

// Components
import Message from './Message';

const NotificationDialog = ({ open, setOpen, notifications, setNotifications }) => {

    const isAllRead = useMemo(() => {
        if (!notifications.length) return false;
        return notifications.every((notification) => notification.read)
    }, [notifications])

    const handleClose = () => {
        setOpen(false);
    };

    const handleMarkAllAsRead = () => {
        if (notifications.length) {
            notifications.forEach(async (notification) => {
                await Data.Notification.updateReadNotifications(notification.id);
                setNotifications((prevNotifications) => {
                    const updated = prevNotifications.map((notification) => {
                        if (!notification.read) notification.read = true;
                        return notification;
                    });
                    return updated;
                });
            });
        }
    }

    return (
        <DialogBox
            open={open}
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle><CelebrationIcon /> Notifications</DialogTitle>
            <DialogContent>
                {notifications.length > 0 ? notifications.map((notification, index) => (
                    <Message
                        key={index}
                        {...notification}
                        setNotifications={setNotifications}
                    />
                )) : <DialogContentText>No Notifications</DialogContentText>}
            </DialogContent>
            <Actions>
                <MarkAllAsReadButton variant='text' onClick={handleMarkAllAsRead} {...(isAllRead ? { disabled: true } : null)}>Mark All As Read</MarkAllAsReadButton>
                <CloseButton variant='text' onClick={handleClose}>Close</CloseButton>
            </Actions>
        </DialogBox>
    )
};

NotificationDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    notifications: PropTypes.array.isRequired,
    setNotifications: PropTypes.func.isRequired,
}

const DialogBox = styled(Dialog)({
    width: 'min(fit-content, 600px)',
    maxHeight: '600px',
    overflow: 'auto',
});

const Actions = styled(DialogActions)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
})

const CloseButton = styled(Button)({
    color: 'red',
    fontSize: '.75em'
});

const MarkAllAsReadButton = styled(Button)({
    color: 'green',
    fontSize: '.75em'
});

export default NotificationDialog;