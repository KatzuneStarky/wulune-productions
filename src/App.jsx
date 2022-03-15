import './App.css';
import Footer from './Components/Footer/Footer';
import Menu from './Components/Menu/Menu';
import HomePage from './Pages/HomePage/HomePage';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Contact from './Pages/Contact/Contact';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">     
      <Router>
        <Menu />
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/about' element={<Contact />} />
            <Route path='/portfolio' element={<Contact />} />
            <Route path='/team' element={<Contact />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>    
    </div>
  );
}

export default App;