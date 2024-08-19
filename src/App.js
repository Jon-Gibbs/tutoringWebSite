import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About.js';
import Contact from './components/Contact.js';


  function App() {
    return (
      <Router>
      <div className="App">
        {/* Header Section */}
        <header className="App-header">
          <h1>Jon Gibbs: Lynwood area Private Math Tutor</h1>
        
          <nav>
            <Link to="/">Who I Am</Link>
            <Link to="/about">How I Tutor</Link>
            <Link to="/contact">Contact</Link>
          </nav> 
          <img className="profile-image" src="/images/profile.jpeg" alt="me" /> 
        </header>
  
        {/* Main Content Section */}
        <main className = "main-content">
          <div className = "main-contentTextBox">
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
  
        {/* Footer Section */}
        <footer>
          <p>&copy; 2024 Jon Gibbs website</p>
        </footer>
      </div>
      </Router>
    );
  }
  
  export default App;


