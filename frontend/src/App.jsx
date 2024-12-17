import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
//pages
import Calculator from './pages/calculator.jsx';
import WeatherApp from './pages/weatherApp.jsx';
//components
import Hamburger from './components/hamburger.jsx';

function App() {
  return (
    <Router>
      <Hamburger />
      <Routes>
        <Route path="/" element={<Calculator />} /> 
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/weather" element={<WeatherApp />} />
        
      </Routes>
    </Router>
  );
}

export default App;
