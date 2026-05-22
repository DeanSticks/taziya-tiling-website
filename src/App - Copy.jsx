import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';


//const Contact = () => <div style={{ padding: '20px', color: 'black' }}><h2>📞 Contact</h2><p>Call us for a quote!</p></div>;

function App() {
  return (
    <BrowserRouter>
      {/* The Navigation MUST be inside BrowserRouter */}
      <nav style={{ 
        padding: '20px', 
        background: '#333', 
        display: 'flex', 
        gap: '15px' 
      }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
        <Link to="/services" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Services</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* ADD THE FOOTER HERE */}
      <footer style={{ 
        padding: '40px 20px', 
        backgroundColor: '#222', 
        color: '#fff', 
        marginTop: '60px',
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ marginBottom: '10px' }}>Dean's Premium Tiling</h3>
          <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '20px' }}>
            Quality craftsmanship you can stand on.
          </p>
          
          {/* SOCIAL LINKS */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
            <a href="https://facebook.com" target="_blank" style={{ color: '#fff', textDecoration: 'none' }}>Facebook</a>
            <a href="https://instagram.com" target="_blank" style={{ color: '#fff', textDecoration: 'none' }}>Instagram</a>
            <a href="https://whatsapp.com" target="_blank" style={{ color: '#fff', textDecoration: 'none' }}>WhatsApp</a>
          </div>

          <p style={{ fontSize: '0.8rem', color: '#666' }}>
            © {new Date().getFullYear()} Dean's Tiling. All rights reserved.
          </p>
        </div>
      </footer>

    </BrowserRouter>
  );
}

export default App;