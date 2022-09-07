/**
 * Extra Notes Page
 */

// Dependencies
import React from 'react';

// MUI
import { Box, styled, Typography, Divider, TextField, Button, Paper, Tooltip, Link, List, ListItem } from '@mui/material';


const ExtraNotes = () => {

    const Item = ({name, description, profile, link, title, dateAdded}) => {
        return <ListItem></ListItem>
    }

    return (
        <Main>
            <Typography variant='h1' fontSize='4rem'>Extra Notes</Typography>
            <Divider />
            <Typography variant='h4' fontSize='2rem'>Collection of notes that don't directly relate to the project, but are helpful for those from different domains and fields!</Typography>
            <ListContainer></ListContainer>
        </Main>
    )
}

const Main = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.25em',
    '> *': {
        width: '100%',
    }
});

const ListContainer = styled(List)({})

export default ExtraNotes