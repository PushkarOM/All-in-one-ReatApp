import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
//pages
import Calculator from './pages/calculator.jsx';
import WeatherApp from './pages/weatherApp.jsx';
import CurrencyConverter from './pages/currencyConverter.jsx';
import Header from './components/header.jsx';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Calculator />} /> 
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/weather" element={<WeatherApp />} />
        <Route path='/currencyconverter' element={<CurrencyConverter />} />
        
      </Routes>
    </Router>
  );
}

export default App;
