/**
 * App File
 */

// Dependencies

// MUI
import { Box, Container } from '@mui/material';

// Components
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <Box>
      <Navbar />
      <Container>
        <AppRoutes />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
