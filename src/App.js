import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import ComingSoon from './pages/ComingSoon';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', position: 'relative', paddingBottom: 64 }}>
        <Routes>
          <Route path="*" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
