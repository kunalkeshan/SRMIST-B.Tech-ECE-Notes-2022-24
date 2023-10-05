/**
 * Contribute Requests Page
 */

// Dependencies
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';

// Custom
import config from '../config';
import { fetchProjectIssuesList } from '../utils/axios';

// MUI
import {
  Typography,
  Box,
  styled,
  Divider,
  Grid,
  Paper,
  Stack,
  Chip,
  Tooltip,
  Button,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const ContributeRequests = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const handleFetchIssues = async () => {
      const data = await fetchProjectIssuesList();
      setIssues(data);
    };
    handleFetchIssues();
  }, []);

  const GitHubIssueCard = ({ title, body, state, updatedAt, createdAt, labels, url }) => {

    const handleNavigateToIssue = () => {
      window.open(url, '_blank');
    };

    return (
      <Grid item xs={12} md={4} m={2}>
        <Card>
          <Typography variant='h6'>
            <GitHubIcon /> {title} -{' '}
            <Chip label={state} variant='outlined' color='success' sx={{ transform: 'scale(0.8)' }} />
          </Typography>
          <Divider />
          <Typography
            p={2}
            sx={{
              'img': {
                width: '100%',
              },
            }}
          >
            <ReactMarkdown>{body}</ReactMarkdown>
          </Typography>
          {/* Replaced GitHubButton with an anchor tag */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: config.APP_COLORS.accent,
              color: config.APP_COLORS.darkAccent,
              width: '100%',
              marginBottom: '1em',
              display: 'inline-block',
              textAlign: 'center',
              padding: '12px 24px',
              textDecoration: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: config.APP_COLORS.accent,
                color: config.APP_COLORS.dark,
              },
            }}
          >
            <GitHubIcon /> View Issue in GitHub
          </a>
          <Divider />
          {labels.length > 0 && labels.map((label) => (
            <Tooltip title={label.description} key={label.name}>
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
    );
  };

  return (
    <Main>
      <Typography variant='h1' fontSize='4rem'>Contribution Requests</Typography>
      <Divider />
      {issues.length > 0 ? (
        <CardsContainer
          container
          spacing={2}
          gap={2}
          justifyContent='center'
        >
          {issues.map((issue, index) => (
            <GitHubIssueCard {...issue} key={index} />
          ))}
        </CardsContainer>
      ) : (
        <Typography>No issues available right now! 🥳🙌</Typography>
      )}
    </Main>
  );
};

const Main = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  '> *': {
    width: '100%',
  },
});

const CardsContainer = styled(Grid)({
  marginTop: '1em',
  width: '100%',
});

const Card = styled(Paper)({
  padding: '1em 0.75em',
  height: '100%',
});

export default ContributeRequests;
