/**
 * Notifications Dialog
 */

// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// MUI
import { Dialog, DialogTitle, styled, DialogActions, Button, DialogContent, DialogContentText } from '@mui/material';
import CelebrationIcon from '@mui/icons-material/Celebration';

// Components
import Message from './Message';

const NotificationDialog = ({ open, setOpen, notifications, setNotifications }) => {

    const handleClose = () => {
        setOpen(false);
    };

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
            <DialogActions>
                <CloseButton variant='text' onClick={handleClose}>Close</CloseButton>
            </DialogActions>
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

const CloseButton = styled(Button)({
    color: 'red',
    fontSize: '.75em'
});

export default NotificationDialog;