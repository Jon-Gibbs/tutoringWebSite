import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About.js';
import Contact from './components/Contact.js';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Jon Gibbs: Lynnwood area Private Math Tutor</h1>
          
          <button onClick={toggleNav} className="nav-toggle">
            ☰
          </button>
          <nav className={`nav-links ${isNavOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setIsNavOpen(false)}>Who I Am</Link>
            <Link to="/about" onClick={() => setIsNavOpen(false)}>How I Tutor</Link>
            <Link to="/contact" onClick={() => setIsNavOpen(false)}>Contact</Link>
          </nav>
          <img className="profile-image" src="/images/profile.jpeg" alt="me" />
        </header>

        <main className="main-content">
          <div className="main-contentTextBox">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <div className="mainContentImage">
            <img src="/images/math-stock-photo.jpg" alt="math" />
            <div className="image-gradient"></div>
          </div>
        </main>

        <footer>
          <p>&copy; 2024 Jon Gibbs website</p>
        </footer>
      </div>
    </Router>
  );
}
export default App;
