/**
 * Contribute Requests Page
 */

// Dependencies
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import config from '../config';

// MUI
import { Typography, Box, styled, Divider, Grid, Paper, Stack, Chip, Tooltip, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

// Custom
import { fetchProjectIssuesList } from '../utils/axios';

const ContributeRequests = () => {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        const handleFetchIssues = async () => {
            const data = await fetchProjectIssuesList();
            setIssues(data);
        }
        handleFetchIssues();
    }, []);

    const GitHubIssueCard = ({ title, body, state, updatedAt, createdAt, labels, url }) => {

        const handleNavigateToIssue = () => {
            window.open(url, '_blank');
        }

        return (
            <Grid item xs={12} md={4} m={2}>
                <Card >
                    <Typography variant='h6'><GitHubIcon /> {title} - <Chip label={state} variant='outlined' color='success' sx={{ transform: 'scale(0.8)' }} /></Typography>
                    <Divider />
                    <Typography p={2} sx={{
                        'img': {
                            width: '100%',
                        }
                    }}>
                        <ReactMarkdown>{body}</ReactMarkdown>
                    </Typography>
                    <GitHubButton
                        startIcon={<GitHubIcon />}
                        onClick={handleNavigateToIssue}
                    >View Issue in GitHub</GitHubButton>
                    <Divider />
                    {labels.length > 0 && labels.map((label) => (
                        <Tooltip
                            title={label.description}
                        >
                            <Chip
                                label={label.name}
                                sx={{
                                    cursor: 'pointer',
                                    backgroundColor: `#${label.color}`,
                                    margin: '0.5em 0.25em',
                                }}
                            />
                        </Tooltip>
                    ))}
                    <Divider />
                    <Stack direction='row' spacing={2} mt={1}>
                        <p><b>Created At</b>: {format(new Date(createdAt), 'PPP')}</p>
                        <p><b>Updated At</b>: {format(new Date(updatedAt), 'PPP')}</p>
                    </Stack>
                </Card>
            </Grid>
        )
    }

    return (
        <Main>
            <Typography variant='h1' fontSize='4rem'>Contribution Requests</Typography>
            <Divider />
            {issues.length > 0 ?
                <CardsContainer
                    container
                    spacing={2}
                    gap={2}
                    justifyContent='center'
                >
                    {
                        issues.map((issue, index) => (
                            <GitHubIssueCard {...issue} key={index} />
                        ))
                    }
                </CardsContainer> :
                <Typography>No issues available right now! 🥳🙌</Typography>
            }
        </Main >
    )
}

const Main = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    '> *': {
        width: '100%',
    }
});

const CardsContainer = styled(Grid)({
    marginTop: '1em',
    width: '100%',
});

const Card = styled(Paper)({
    padding: '1em 0.75em',
    height: '100%'
});

const GitHubButton = styled(Button)({
    backgroundColor: config.APP_COLORS.accent,
    color: config.APP_COLORS.darkAccent,
    width: '100%',
    marginBottom: '1em',
    '&:hover': {
        backgroundColor: config.APP_COLORS.accent,
        color: config.APP_COLORS.dark,
    }
})

export default ContributeRequests;