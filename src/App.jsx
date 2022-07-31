/**
 * App File
 */

// Dependencies
import React, { useMemo, useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import config from './config';

// MUI
import { Box, Container, styled } from '@mui/material';

// Components
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import CallToAction from './components/layouts/CallToAction';
import ScrollToTop from './components/layouts/ScrollToTop';

// Hooks
import useGA from './hooks/useGA';
import usePageTracking from './hooks/usePageTracking';

// Custom
import WritingAnimation from './assets/lottie/writing.json';

function App() {
  const [show, setShow] = useState(false);

  useGA();
  usePageTracking();

  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight } = document.documentElement;
      setShow(() => scrollHeight > 50 ? true : false);
      console.log(show);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const defaultOptions = useMemo(() => {
    return {
      loop: true,
      autoplay: true,
      animationData: WritingAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  }, []);


  const AppBackground = () => {
    return (
      <Background>
        <Lottie
          options={defaultOptions}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Background>
    )
  };

  return (
    <Main component='main'>
      <AppBackground />
      <Navbar />
      <Container>
        <AppRoutes />
      </Container>
      <CallToAction />
      <ScrollToTop show={show} setShow={setShow} />
      <Footer />
    </Main>
  );
}

const Main = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  backgroundColor: config.APP_COLORS.main,
  fontFamily: '\'Source Sans Pro\', sans-serif !important',
  '*': {
    fontFamily: 'inherit !important',
    zIndex: '1',
  }
});

const Background = styled(Box)({
  transform: 'translate(-50%, -50%)',
  position: 'fixed',
  top: '50%',
  left: '50%',
  width: 'clamp(200px, 100%, 800px)',
  opacity: '0.15',
  height: 'auto',
  zIndex: '0'
});

export default App;
