/**
 * Search Page
 */

// Dependencies
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams, } from 'react-router-dom';
import Data from '../utils/data';

// MUI
import { Box, styled, Typography, Divider, TextField, Checkbox } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    const [searchParams] = useSearchParams();
    const [searchText, setSearchText] = useState(searchParams.get('q') || '');
    const location = useLocation();


    useEffect(() => { }, [])

    return (
        <Main>
            <Typography variant='h1' fontSize='4rem'>Search</Typography>
            <Divider />
        </Main>
    )
}

const Main = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '> *': {
        width: '100%',
    }
});

export default Search;