/**
 * Extra Notes Page
 */

// Dependencies
import React, { useEffect, useState } from 'react';
import config from '../config';
import Data from '../utils/data';

// MUI
import { Box, styled, Typography, Divider, Tooltip, Link, List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemButton, ListItemIcon, Paper } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


const ExtraNotes = () => {
    const [extraNotes, setExtraNotes] = useState([]);

    useEffect(() => {
        const handleGetExtraNotes = async () => {
            const data = await Data.ExtraNotes.getAllExtraNotes();
            setExtraNotes(data);
        }
        if (extraNotes.length === 0) handleGetExtraNotes();
    }, [extraNotes.length])

    const Item = ({ name, description, profile, link, title, dateAdded }) => {

        const primaryContent = (<Typography variant='h6' fontWeight={600}>{title}</Typography>)

        const secondaryContent = (<Box>
            <Typography variant='body1'><b>Related to:</b> {description.join(', ')}</Typography>
            <Typography variant='body1'><b>Contributed by:</b> <Link href={profile} target='_blank' underline='hover'>{name}</Link></Typography>
            <Typography variant='subtitle2'><b>Added At:</b> {dateAdded}</Typography>
        </Box>)

        return (
            <Paper sx={{ my: '1em', }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar sx={{ my: 'auto' }}>
                        <Tooltip title={`Visit ${name}'s Profile`}>
                            <Link href={profile} target='_blank' underline='none' >
                                <Avatar alt={name} src={profile} />
                            </Link>
                        </Tooltip>
                    </ListItemAvatar>
                    <ListItemText
                        primary={primaryContent}
                        secondary={secondaryContent}
                    />
                    <ListItemButton sx={{
                        display: 'flex',
                        alignItems: 'center', justifyContent: 'center',
                        backgroundColor: config.APP_COLORS.accent,
                        my: 'auto',
                        '&:hover': { backgroundColor: config.APP_COLORS.accent }
                    }}
                        href={link}
                        target='_blank'
                    >
                        <ListItemIcon sx={{ width: 'fit-content', display: 'flex', gap: '1em', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                            <TrendingUpIcon /> <span>{' '}View Notes</span>
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            </Paper>
        )
    }

    return (
        <Main>
            <Typography variant='h1' fontSize='4rem'>Extra Notes</Typography>
            <Divider />
            <Typography variant='h4' fontSize='1.4rem'>Collection of notes that don't directly relate to the project, but are helpful for those from different domains and fields!</Typography>
            <ListContainer >
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