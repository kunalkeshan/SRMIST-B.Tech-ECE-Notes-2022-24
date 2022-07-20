/**
 * Notification Message
 */

// Dependencies
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import reactStringReplace from 'react-string-replace';
import Data from '../../utils/data';

// MUI
import { DialogContentText, styled, Typography, Link } from '@mui/material';

const Message = ({ id, title, message, dateAdded, link, linkText, setNotifications, read }) => {

    let messageBody = message;
    if (link && linkText) {
        messageBody = reactStringReplace(messageBody, '{link}', () => (
            <Link href={link} target='_blank' component='a'>
                {linkText}
            </Link>
        ));
    };

    const readNotificationStyles = useMemo(() => {
        return {
            backgroundColor: '#80808040',
        }
    }, []);

    const handleMarkNotificationAsRead = async () => {
        await Data.Notification.updateReadNotifications(id);
        setNotifications((prevNotifications) => {
            const updated = prevNotifications.map((notification) => {
                if (notification.id === id) notification.read = true;
                return notification;
            });
            return updated;
        });
    };

    return (
        <TextBox
            sx={read ? readNotificationStyles : {}}
        >
            <Typography variant='h6'>{title}</Typography>
            <Typography variant='subtitle2' >{messageBody}</Typography>
            <Typography
                variant='subtitle2'
                fontSize='.6rem'
                textAlign='right'
            >Last Updated: <b>{dateAdded}</b></Typography>
            {!read ? <MarkAsReadButton
                variant='button'
                onClick={handleMarkNotificationAsRead}
            >Mark as read</MarkAsReadButton> : null}
        </TextBox>
    )
};

Message.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    dateAdded: PropTypes.string.isRequired,
    link: PropTypes.oneOfType([PropTypes.string, PropTypes.any]).isRequired,
    linkText: PropTypes.oneOfType([PropTypes.string, PropTypes.any]).isRequired,
    read: PropTypes.bool.isRequired,
    setNotifications: PropTypes.func.isRequired,
};

const TextBox = styled(DialogContentText)({
    padding: '.25em .5em',
    borderRadius: '8px',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    marginTop: '1em',
});

const MarkAsReadButton = styled(Link)({
    textTransform: 'unset',
    cursor: 'pointer',
})

export default Message;