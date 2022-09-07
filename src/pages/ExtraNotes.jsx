/**
 * Extra Notes Page
 */

// Dependencies
import React, { useEffect, useState } from 'react';
import Data from '../utils/data';

// MUI
import { Box, styled, Typography, Divider, Button, Tooltip, Link, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';


const ExtraNotes = () => {
    const [extraNotes, setExtraNotes] = useState([]);

    useEffect(() => {
        const handleGetExtraNotes = async () => {
            const data = await Data.ExtraNotes.getAllExtraNotes();
            setExtraNotes(data);
        }
        if (extraNotes.length === 0) handleGetExtraNotes();
    }, [])

    const Item = ({ name, description, profile, link, title, dateAdded }) => {
        return <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Tooltip title={`Visit ${name}'s Profile`}>
                    <Link href={profile} target='_blank' underline='none'>
                        <Avatar alt={name} src={profile} />
                    </Link>
                </Tooltip>
            </ListItemAvatar>
            <ListItemText
                primary={title}
                secondary={`Related to: ${description.join(', ')}`}
            />
        </ListItem>
    }

    return (
        <Main>
            <Typography variant='h1' fontSize='4rem'>Extra Notes</Typography>
            <Divider />
            <Typography variant='h4' fontSize='1.4rem'>Collection of notes that don't directly relate to the project, but are helpful for those from different domains and fields!</Typography>
            <ListContainer>
                {extraNotes.length > 0 && extraNotes.map((extra, index) => (
                    <Item key={index} {...extra} />
                ))}
            </ListContainer>
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