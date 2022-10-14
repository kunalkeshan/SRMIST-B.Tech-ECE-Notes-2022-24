/**
 * Feedback Modal
 */

// Dependencies
import React, { useEffect, useState } from 'react';
import config from '../../config';

import {
    Dialog,
    DialogTitle,
    styled,
    Container,
    Typography,
    Link,
    DialogActions,
    Button,
} from '@mui/material';



const FeedbackModal = ({ open, setOpen }) => {
    const TWO_WEEKS_MS = 1.21e9;
    const THIRTY_MS = 1000 * 30;
    const [, setFormStatus] = useState({
        lastShown: null,
    });

    const onClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const handleShowForm = () => {
            setTimeout(() => {
                setOpen(true);
                setFormStatus((prev) => {
                    const newStatus = {
                        ...prev,
                        lastShown: Date.now(),
                    };
                    localStorage.setItem(
                        'formStatus',
                        JSON.stringify(newStatus)
                    );
                    return newStatus;
                });
            }, THIRTY_MS);
        };

        const handleFormStatus = () => {
            let localFormStatus = localStorage.getItem('formStatus');
            if (localFormStatus) {
                localFormStatus = JSON.parse(localFormStatus);
                setFormStatus(localFormStatus);
                if (localFormStatus.lastShown !== null) {
                    const now = Date.now();
                    if (now - localFormStatus.lastShown > TWO_WEEKS_MS)
                        handleShowForm();
                } else handleShowForm();
            } else handleShowForm();
        };
        handleFormStatus();
    }, [THIRTY_MS, setOpen]);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            sx={{
                overflowX: 'hidden',
                '.MuiPaper-root': {
                    width: 'fit-content',
                    maxWidth: 'none',
                },
            }}
        >
            <Container>
                <DialogTitle>Feedback Form</DialogTitle>
                <Typography mx={3} mb={2}>
                    Unable to view the form, use{' '}
                    <Link
                        href={config.GOOGLE_FORM_FEEDBACK_URL}
                        target='_blank'
                    >
                        {' '}
                        this link instead
                    </Link>
                    .
                </Typography>
                <FormIframe
                    src={`${config.GOOGLE_FORM_FEEDBACK_URL}&embedded=true`}
                    frameBorder='0'
                    title='Shiryoku Feedback Form'
                >
                    Loading…
                </FormIframe>
                <DialogActions>
                    <CloseButton variant='text' color='error' onClick={onClose}>
                        Close
                    </CloseButton>
                </DialogActions>
            </Container>
        </Dialog>
    );
};

const FormIframe = styled('iframe')({
    width: '640px',
    height: '520px',
    overflowX: 'hidden',
    '@media(max-width: 700px)': {
        width: '520px',
    },
    '@media(max-width: 440px)': {
        width: '280px',
    },
});

const CloseButton = styled(Button)({});

export default FeedbackModal;