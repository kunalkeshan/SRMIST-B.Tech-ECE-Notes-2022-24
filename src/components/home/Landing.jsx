/**
 * Home Landing Page
 */

// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';

// MUI
import { Box, styled, Typography, Divider, Button, Accordion, AccordionSummary, AccordionDetails, Alert, AlertTitle } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Components
import ProjectPartner from '../reuseable/ProjectPartner';

const Landing = () => {

  const handleViewSemScroll = () => {
    const currentWindowHeight = window.innerHeight;
    window.scroll({ behavior: 'smooth', top: currentWindowHeight })
  };

  return (
    <Page>
      <Content>
        <Box width={'100%'}>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} style={{ minHeight: 0, fontWeight: 'bold' }} >Important Update: Course Materials and Regulations Information</AccordionSummary>
            <AccordionDetails>
              <Alert severity='info' style={{ textAlign: 'left' }}>
                <AlertTitle style={{ fontWeight: 600 }}>Welcome and Important Update on Course Regulations</AlertTitle>
                <Typography variant='body1'>Welcome to the ECE Notes project! The notes here, on our GitHub Repository, and on Google Drive are for courses under the "18" regulation. Our college now uses the "22" regulation, so new students might find these materials less relevant.</Typography>
                <Typography variant='body1' marginTop={1}>This project aimed to assist students, and I hope it helped those under the "18" regulation as much as it did for me. Feel free to connect with me at <Link to='https://x.com/_kunalkeshan_' target='_blank'>https://x.com/_kunalkeshan_</Link>.</Typography>
                <Typography variant='body1' marginTop={1}>Identify Your Course Regulation:</Typography>
                <Typography variant='body1' marginTop={1}>• "18XXXXXXT" = 18 regulation</Typography>
                <Typography variant='body1' marginTop={1}>• "22XXXXXXT" = 22 regulation</Typography>
                <Typography variant='body1' marginTop={1}>Thank you for visiting, and good luck with your studies!</Typography>
                <Typography variant='body1' marginTop={1}>— Kunal Keshan</Typography>
              </Alert>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Typography
          variant='h1'
          fontSize='4rem'
          fontWeight='600'
          marginTop={2}
        >B.Tech ECE Notes</Typography>
        <Typography
          variant='h2'
          fontSize='2.5rem'
          fontWeight='400'
        >SRMIST, Academic Year: 2020-24 Notes</Typography>
        <Divider variant='middle' />
        <Typography
          variant='body1'
          fontSize='1.5rem'
          mt={2}
        >
          Collection of all notes of SRMIST B.Tech Electronics and Communications Dept. for the academic year: 2020-24.
          Visit the Repository or Drive to access all notes, additional resources for studying and how to study each subject.
        </Typography>
        <ViewSemButton onClick={handleViewSemScroll}>View Semester Notes</ViewSemButton>
        <Box m={2}>
          <Typography>Project Partners</Typography>
          <Divider variant='inset' />
          <ProjectPartnersContainer>
            {config.APP_PARTNERS.map((partner, index) => (
              <ProjectPartner {...partner} key={index} scale={0.8} />
            ))}
          </ProjectPartnersContainer>
        </Box>
      </Content>
    </Page>
  )
};

const Page = styled(Box)({
  width: 'min(100%, 800px)',
  height: 'max(100vh, fit-content)',
  display: 'flex',
  transition: 'all 200ms',
  '@media (max-width: 600px)': {
    transform: 'scale(0.9)'
  },
  '@media (max-width: 400px)': {
    transform: 'scale(0.8)'
  }
});

const Content = styled(Box)({
  padding: '1em',
  textAlign: 'center',
  margin: 'auto',
  zIndex: '10',
  color: config.APP_COLORS.dark,
});

const ViewSemButton = styled(Button)({
  fontSize: '1.5rem',
  marginTop: '1.5em',
  backgroundColor: config.APP_COLORS.accent,
  color: config.APP_COLORS.darkAccent,
  padding: '0.25em 1em',
  transition: 'all 200ms',
  '&:hover': {
    transform: 'scale(1.05)',
    color: config.APP_COLORS.dark,
    backgroundColor: config.APP_COLORS.accent,
  }
});

const ProjectPartnersContainer = styled(Box)({
  margin: 2,
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
});

export default Landing;