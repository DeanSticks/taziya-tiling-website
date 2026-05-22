import { useState } from 'react'; // 1. Added State import
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  // 2. Added the Dark Mode toggle state
  const [darkMode, setDarkMode] = useState(false);

  // 3. Theme configurations
  const theme = {
    bg: darkMode ? '#121212' : '#ffffff',
    text: darkMode ? '#ffffff' : '#111111',
    navBg: darkMode ? '#021333' : '#05286a', // Slightly darker blue variant for dark mode
    footerBg: darkMode ? '#0a0a0a' : '#05116b'
  };

  return (
    <BrowserRouter>
      {/* HEADER NAV BAR */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '20px 40px', 
        background: theme.navBg, // Dynamic background color
        color: 'white', 
        position: 'sticky',
        top: 0,
        zIndex: 1000, 
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'background 0.3s ease'
      }}>
        {/* LEFT SIDE: Your Brand Name */}
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Taziya Enterprise
          </Link>
        </div>

        {/* RIGHT SIDE: Your Navigation Links + Toggle Button */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
          <Link to="/services" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Services</Link>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Contact</Link>

          {/* 4. THE TOGGLE BUTTON IN THE MENU */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: 'transparent',
              border: '1px solid white',
              borderRadius: '20px',
              color: 'white',
              padding: '6px 12px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '0.85rem',
              marginLeft: '10px'
            }}
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </nav>

      {/* 5. THE CONTENT WRAPPER THAT CONTROLS THE MAIN BACKGROUND COLOR */}
      <div style={{ 
        backgroundColor: theme.bg, 
        color: theme.text, 
        minHeight: '100vh', 
        transition: 'all 0.3s ease' 
      }}>
        <Routes>
          {/* We pass the darkMode status down into each separate page file */}
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/services" element={<Services darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>
      </div>

      {/* FOOTER */}
      <footer style={{ 
        padding: '40px 20px', 
        backgroundColor: theme.footerBg, // Dynamic footer background
        color: '#fff', 
        textAlign: 'center',
        transition: 'background 0.3s ease'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ marginBottom: '10px' }}>Taziya Premium Tiling</h3>
          <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '20px' }}>
            Quality craftsmanship you can stand on.
          </p>
          
          {/* SOCIAL LINKS */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>Instagram</a>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>WhatsApp</a>
          </div>

          <p style={{ fontSize: '0.8rem', color: '#666' }}>
            © {new Date().getFullYear()} Taziya Enterprise. All rights reserved.
          </p>
        </div>
      </footer>

      <FloatingWhatsApp 
        phoneNumber="+27 78 617 6901" 
        accountName="Taziya Enterprise"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </BrowserRouter>
  );
}

export default App;
