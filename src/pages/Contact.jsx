/**
 * Contact Page
 */

// Dependencies
import React, { useMemo, memo } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import config from '../config';

// MUI
import { Box, styled, Typography, Divider, TextField, Button, Paper, Tooltip, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

// Custom
import ContactGif from '../assets/contact.gif'

const Contact = () => {
    const [submit, handleSubmit] = useForm(config.FORMSPREEE_CONTACT_FORM_ID);

    const socialLinks = useMemo(() => [
        {
            name: `Email: ${config.CONTACT.email}`,
            url: `mailto:${config.CONTACT.email}`,
            icon: <EmailIcon sx={{ '&:hover': { color: '#ff0f00 !important' } }} />
        },
        {
            name: 'Instagram',
            url: config.CONTACT.instagram,
            icon: <InstagramIcon sx={{ '&:hover': { color: '#C13584 !important' } }} />
        },
        {
            name: 'LinkedIn',
            url: config.CONTACT.linkedIn,
            icon: <LinkedInIcon sx={{ '&:hover': { color: '#1DA1F2 !important' } }} />,
        },
        {
            name: 'Twitter',
            url: config.CONTACT.twitter,
            icon: <TwitterIcon sx={{ '&:hover': { color: '#1DA1F2 !important' } }} />
        },
        {
            name: 'GitHub',
            url: config.CONTACT.github,
            icon: <GitHubIcon />
        }
    ], []);

    const LinkItem = ({ name, icon, url }) => {
        return (
            <Tooltip title={name}>
                <LinkPaper>
                    <Link href={url} target="_blank">
                        {icon}
                    </Link>
                </LinkPaper>
            </Tooltip>
        )
    }

    return (
        <Main>
            <Typography variant='h1' fontSize='4rem'>Contact</Typography>
            <Divider />
            <Content>
                <Animation
                    display={{ xs: 'none', md: 'block' }}
                >
                    <img
                        src={ContactGif}
                        alt='Contact gif'
                        width='100%'
                        height='100%'
                        style={{
                            backgroundColor: 'transparent',
                        }}
                    />
                </Animation>
                <ContactForm
                    width={{ xs: '100%', md: '35%' }}
                >
                    <Typography variant='body1'>If you have some changes that will improve the quality of this project, or this website. Feel free to contact me by filling the form below. I'll reach out to you ASAP!</Typography>
                    {submit.succeeded ? (
                        <Box>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant='body1' fontSize='1.5rem'>Thanks for sending me a message! I'll get back to you ASAP!</Typography>
                            <Divider sx={{ my: 2 }} />
                        </Box>
                    ) : (
                        <Form
                            component='form'
                            onSubmit={handleSubmit}
                        >
                            <TextField
                                type='text'
                                variant='outlined'
                                placeholder='eg: John Doe'
                                name='name'
                                id='name'
                                label='Name'
                                fullWidth
                                required
                            />
                            <TextField
                                type='email'
                                variant='outlined'
                                placeholder='eg: john.doe@gmail.com'
                                name='email'
                                id='email'
                                label='Email'
                                fullWidth
                                required
                            />
                            <TextField
                                type='text'
                                variant='outlined'
                                placeholder='eg: Improve site navbar!'
                                name='message'
                                id='message'
                                label='Your Message'
                                multiline
                                fullWidth
                                required
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={submit.errors}
                            />
                            <SubmitButton type='submit'>Send Message</SubmitButton>
                        </Form>
                    )}
                    <Typography variant='body1'>Alternatively, contact me through any of the links below.</Typography>
                    <LinksContainer>
                        {socialLinks.map((link, index) => (
                            <LinkItem
                                key={index}
                                {...link}
                            />
                        ))}
                    </LinksContainer>
                </ContactForm>
            </Content>
        </Main>
    )
};

const Main = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '> *': {
        width: '100%',
    }
});

const Content = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '1em',
});

const Animation = styled(Box)({
    aspectRatio: '1 / 1',
    width: '65%',
    maxHeight: '560px',
    overflow: 'hidden',
    display: 'flex',
});

const ContactForm = styled(Box)({
    padding: '1em',
    width: '35%',
    background: 'rgba( 255, 255, 255, 0.4 )',
    backdropFilter: 'blur(4px)',
    webkitBackdropFilter: 'blur(4px)',
    borderRadius: '8px',
    marginTop: '1em',
});

const Form = styled(Box)({
    width: '100%',
    padding: '0.5em 1.5em 0.5em 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
});

const SubmitButton = styled(Button)({
    backgroundColor: `${config.APP_COLORS.accent}90`,
    color: config.APP_COLORS.darkAccent,
    '&:hover': {
        backgroundColor: config.APP_COLORS.accent,
        color: config.APP_COLORS.dark,
    }
});

const LinksContainer = styled(Box)({
    marginTop: '1em',
    display: 'flex',
    alignItems: 'center',
    gap: '1.5em',
});

const LinkPaper = styled(Paper)({
    padding: '0.5em',
    cursor: 'pointer',
    transition: 'all 200ms',
    '&:hover': {
        backgroundColor: config.APP_COLORS.accent,
    },
    'a': {
        all: 'unset',
    }
});


export default memo(Contact);