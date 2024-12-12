import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Calculator from './pages/calculator.jsx';
import Hamburger from './components/hamburger.jsx';

function App() {
  return (
    <Router>
      <Hamburger />
      <Routes>
        <Route path="/" element={<Calculator />} /> 
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
  );
}

export default App;
