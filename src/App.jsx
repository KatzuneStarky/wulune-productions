import './App.css';
import Footer from './Components/Footer/Footer';
import Menu from './Components/Menu/Menu';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App"> 
      <Menu />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;