/**
 * Semester Page - Courses
 */

// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import config from '../../config';

// MUI
import { Box, styled, Typography, Accordion, AccordionSummary, AccordionDetails, LinearProgress, Stack, Paper, Divider, IconButton, Tooltip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';

const Courses = ({ courses }) => {

    const CourseContent = ({ index, name, subjectCode, difficulty, credits, repoLink, downloadLink, driveLink }) => {

        const difficultyInPercentage = difficulty * 10;

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
        ];

        const handleNavigate = (link) => () => {
            const eventData = {
                category: 'Navigate',
            }
            if (link.includes('drive')) eventData.action = 'View Course Notes in Drive'
            if (link.includes('downgit')) eventData.action = 'Download Course Notes'
            if (link.includes('github')) eventData.action = 'View Course Notes in GitHub'
            ReactGA.event(eventData);

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
                            <IconButton disabled>
                                <Icon />
                            </IconButton>
                        </Tooltip>
                    )
                    }
                </Item>
            )
        }

        return (
            <Accordion
                disableGutters
                sx={{
                    '&.Mui-expanded': {
                        mx: 0,
                        padding: 0,
                        my: 2,
                    }
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index}a-content`}
                    id={`panel${index}a-header`}
                >
                    <Typography sx={{ width: '40%', flexShrink: 0, fontSize: '1.2rem' }}>
                        {name}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Subject Code: {subjectCode}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack
                        direction="row"
                        flexWrap='wrap'
                        divider={<Divider orientation="vertical" flexItem />}
                        gap={2}
                    >
                        <Item>Course: {name}</Item>
                        <Item>Code: {subjectCode}</Item>
                        <Item>Credits: {credits}</Item>
                        {links.map((link, index) => (
                            <LinkItem
                                key={index}
                                {...link}
                            />
                        ))}
                    </Stack>
                    <Typography variant='body1' fontSize='1.1rem' my={2}>Subject Difficulty: {difficulty}/10</Typography>
                    <LinearProgress variant='determinate' value={difficultyInPercentage} />
                </AccordionDetails>
            </Accordion>
        )
    }

    return (
        <Container>
            <Typography variant='h2' fontSize='2rem' fontWeight={600} mb={1}>Courses</Typography>
            {courses.map((course, index) => (
                <CourseContent
                    key={index}
                    index={index}
                    {...course}
                />
            ))}
        </Container>
    )
};

const Container = styled(Box)({
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

Courses.propTypes = {
    courses: PropTypes.array.isRequired,
}

export default Courses;