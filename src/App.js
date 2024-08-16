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
          <h1>Jon Gibbs: Greater Lynwood area Private Tutor</h1>
        
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav> 
          <img className="profile-image" src="/images/profile.jpeg" alt="me" /> 
        </header>
  
        {/* Main Content Section */}
        <main className = "main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
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


