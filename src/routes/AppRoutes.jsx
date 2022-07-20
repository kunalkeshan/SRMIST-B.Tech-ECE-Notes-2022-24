/**
 * Application Routes
 */

// Dependencies
import React, { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Components
import DefaultSkeleton from '../components/reuseable/DefaultSkeleton'

// Pages
const Home = lazy(() => import('../pages/Home'));
const Contribute = lazy(() => import('../pages/Contribute'));
const Semester = lazy(() => import('../pages/Semester'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AppRoutes = () => {

    return (
        <Suspense fallback={<DefaultSkeleton />}>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/contribute' exact element={<Contribute />} />
                <Route path='/notes/:currentSemester' exact element={<Semester />} />
                <Route path='/not-found' exact element={<NotFound />} />
                <Route path='*' exact element={<Navigate to='/not-found' />} />
            </Routes>
        </Suspense>
    )
}

export default AppRoutes