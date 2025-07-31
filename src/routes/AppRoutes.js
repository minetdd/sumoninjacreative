import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
// import Services from '../components/Services';
// import About from '../components/About';
// import ContactUs from '../components/ContactUs';
import ComingSoon from '../pages/ComingSoon';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/service" element={<ComingSoon />} />
      <Route path="/about" element={<ComingSoon />} />
      <Route path="/contact" element={<ComingSoon />} />
      <Route path="*" element={<ComingSoon />} />
    </Routes>
  );
}

export default AppRoutes;
