/**
 * Semester Page - Sem Info
 */

// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config';

// MUI
import { Box, styled, Stack, Divider, Paper, Tooltip, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';

const SemInfo = ({ name, credits, numberOfCourses, repoLink, downloadLink, driveLink }) => {

    const links = [
        {
            title: 'View Repo',
            url: repoLink,
            Icon: GitHubIcon,
        },
        {
            title: 'Download Files',
            url: downloadLink,
            Icon: FileDownloadIcon,
        },
        {
            title: 'View Drive',
            url: driveLink,
            Icon: AddToDriveIcon,
        }
    ]

    const handleNavigate = (link) => () => {
        window.open(link, '_blank');
    };

    const LinkItem = ({ title, Icon, url }) => {
        const isUrlPresent = Boolean(url) && typeof url === 'string' && url.length > 0;
        return (
            <Item>
                {isUrlPresent ? (
                    <Tooltip title={title}>
                        <IconButton onClick={handleNavigate(url)}>
                            <Icon />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip describeChild title='Link not available'>
                        <IconButton>
                            <Icon />
                        </IconButton>
                    </Tooltip>
                )
                }

            </Item>
        )
    }

    return (
        <Container>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
            >
                <Item>{name}</Item>
                <Item>Total Credits: {credits}</Item>
                <Item>Number of Courses: {numberOfCourses}</Item>
                {links.map((link, index) => (
                    <LinkItem
                        key={index}
                        {...link}
                    />
                ))}
            </Stack>
        </Container>
    )
};

const Container = styled(Box)({
    width: '100%',
    marginTop: '1em',
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '0.25em 1em',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
    transition: 'all 200ms',
    '&:hover': {
        backgroundColor: config.APP_COLORS.accent,
        color: config.APP_COLORS.dark,
    }
}));

SemInfo.propTypes = {
    name: PropTypes.string.isRequired,
    credits: PropTypes.number.isRequired,
    numberOfCourses: PropTypes.number.isRequired,
    repoLink: PropTypes.string.isRequired,
    downloadLink: PropTypes.string.isRequired,
    driveLink: PropTypes.string.isRequired,
}

export default SemInfo;