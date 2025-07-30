import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
