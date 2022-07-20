/**
 * App File
 */

// Dependencies

// MUI
import { Box, Container, styled } from '@mui/material';
import config from './config';

// Components
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <Main component='main'>
      <Navbar />
      <Container>
        <AppRoutes />
      </Container>
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
  height: '100vh',
  backgroundColor: config.APP_COLORS.main,
  fontFamily: '\'Source Sans Pro\', sans-serif',
  '*': {
    fontFamily: 'inherit',
  }
});

export default App;
