
import './App.css';



 
  
  function App() {
    return (
      <div className="App">
        {/* Header Section */}
        <header className="App-header">
          <h1>Welcome to My Website</h1>
        
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav> 
          <img className="profile-image" src="/profile.jpeg" alt="me" /> 
        </header>
  
        {/* Main Content Section */}
        <main>
          <section id="home">
            <h2>Home</h2>
            <p>This is the homepage of my simple React website. Feel free to explore!</p>
          </section>
          <section id="about">
            <h2>About</h2>
            <p>This section provides information about me and the website.</p>
          </section>
          <section id="services">
            <h2>Services</h2>
            <p>Here are some of the services I offer.</p>
          </section>
          <section id="contact">
            <h2>Contact</h2>
            <p>You can contact me through the following methods.</p>
          </section>
        </main>
  
        {/* Footer Section */}
        <footer>
          <p>&copy; 2024 My Simple Website</p>
        </footer>
      </div>
    );
  }
  
  export default App;


