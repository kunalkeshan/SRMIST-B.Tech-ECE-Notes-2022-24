/**
 * Search Page
 */

// Dependencies
import React, { useEffect, useState } from 'react';
import { useSearchParams, } from 'react-router-dom';
import Data from '../utils/data';

// MUI
import { Box, styled, Typography, Divider, TextField, Checkbox, Container, FormControlLabel, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchText, setSearchText] = useState(searchParams.get('q') || '');
    const [results, setResults] = useState([]);
    const [filter, searchFilter] = useState([]);

    useEffect(() => {
        const searchQuery = searchText.replace(/W+/g, '+');
        searchParams.set('q', searchQuery)
        setSearchParams(searchParams)
    }, [searchText, searchParams, setSearchParams]);

    useEffect(() => {
        const filterQuery = filter.join(',').replace(/W+/g, '');
        searchParams.set('filter', filterQuery)
        setSearchParams(searchParams)
    }, [filter, searchParams, setSearchParams]);

    useEffect(() => {
        const searchQuery = searchParams.get('q');
        const filterQuery = searchParams.get('filter').split(",");
        setSearchText(searchQuery.replace('+', ' '));
        searchFilter(filterQuery);
    }, [searchParams]);

    useEffect(() => {
        const handleSearchResources = async () => {
            try {
                let excluded = ['allSemesters', 'extraNotes'];
                if (!filter.includes('allSemesters')) excluded.splice(excluded.indexOf('allSemesters', 1));
                if (!filter.includes('extraNotes')) excluded.splice(excluded.indexOf('extraNotes', 1));
                const data = await Data.All.searchAllNotes(searchText, { excludes: excluded });
                setResults(data);
            } catch (error) {
                setResults([]);
            }
        }
        if (searchText.length !== 0) handleSearchResources();
    }, [searchText, filter]);

    const handleSearchInput = (e) => {
        setSearchText(e.target.value);
    }

    const handleFilter = (field) => (e) => {
        if (e.target.checked) searchFilter((prev) => prev.concat(field))
        else searchFilter((prev) => prev.filter(val => val !== field))
    }

    const handleClearSearch = () => {
        setSearchText('');
        searchFilter([]);
        setResults([]);
    }

    return (
        <Main>
            <Typography variant='h1' fontSize='4rem'>Search</Typography>
            <Divider />
            <Container sx={{ display: 'flex', flexDirection: 'column', }}>
                <TextField
                    type='text'
                    label='Search resources'
                    placeholder='Type to search relevant notes'
                    onChange={handleSearchInput}
                    value={searchText}
                    fullWidth
                    variant='filled'
                    sx={{ my: 2, mx: 'auto', width: '80%' }}
                    InputProps={{
                        endAdornment: (<InputAdornment position='end'>
                            <SearchIcon />
                        </InputAdornment>)
                    }}

                />
                <Box sx={{ mb: 2, mx: 'auto', width: '80%' }}>
                    <Typography>Search With:</Typography>
                    <FormControlLabel control={<Checkbox onChange={handleFilter('allSemesters')} />} label='Semesters' />
                    <FormControlLabel control={<Checkbox onChange={handleFilter('extraNotes')} />} label='Extra Notes' />
                    {searchText.length > 0 && <Typography variant='caption' onClick={handleClearSearch} sx={{ color: 'red', textDecoration: 'underline', cursor: 'pointer' }}>Clear Search</Typography>}
                </Box>
            </Container>
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