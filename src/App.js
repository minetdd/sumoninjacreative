import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme'; 
import './styles/App.css';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes'; // <-- Fixed import path

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={{ minHeight: '100vh', position: 'relative', paddingBottom: 64 }}>
          <AppRoutes /> {/* Use the routes here */}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
