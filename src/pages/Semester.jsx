/**
 * Semester Page
 */

// Dependencies
import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Data from '../utils/data';

// MUI
import { Box, Divider, styled, Typography } from '@mui/material';

const Semester = () => {
    const location = useLocation();

    const [currentSem, setCurrentSem] = useState(null);
    const [semCourses, setSemCourses] = useState([]);

    const [semKey, semName] = useMemo(() => {
        const currentLocation = location.pathname.split('/').pop();
        const key = currentLocation.replace('-', '');
        const name = currentLocation.split('-').map((word) => {
            const firstLetterUpperCaseWord = word.charAt(0).toUpperCase() + word.slice(1);
            return firstLetterUpperCaseWord;
        }).join(' ');
        return [key, name];
    }, [location]);

    useEffect(() => {
        const handleSetCurrentSem = async () => {
            const data = await Data.Semesters.getAllSemesters();
            const currentSemester = data.find((sem) => sem.name === semName);
            setCurrentSem(currentSemester);
        };
        if (!currentSem) handleSetCurrentSem();
    }, [currentSem, semName]);

    useEffect(() => {
        const handleSetSemCourses = async () => {
            const data = await Data.Semesters.getCoursesOfSemester(semKey);
            setSemCourses(data);
        };
        if (semCourses.length === 0) handleSetSemCourses();
    }, [semCourses, semKey]);

    return (
        <Main>
            <Typography variant='h1' fontSize='4rem'>{semName}</Typography>
            <Divider />
        </Main>
    )
};

const Main = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    '> *': {
        width: '100%',
    }
})

export default Semester;