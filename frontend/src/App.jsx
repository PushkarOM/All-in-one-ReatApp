import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
//pages
import Calculator from './pages/calculator.jsx';
import WeatherApp from './pages/weatherApp.jsx';
import CurrencyConverter from './pages/currencyConverter.jsx';
import ToDoApp from './pages/toDoApp.jsx';
import ChatBot from './pages/chatBot.jsx';

//components
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
        <Route path='/todoapp' element={<ToDoApp />} />
        <Route path='/chatbot' element={<ChatBot />} />
      </Routes>
    </Router>
  );
}

export default App;
