import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from"./Components/Header/Header"
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
