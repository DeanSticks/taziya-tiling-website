import { useState } from 'react';

// 1. Notice we grab the darkMode variable right here!
const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // 2. We define dynamic styles inside the component based on the dark mode state
  const dynamicStyles = {
    // Labels (Full Name, Email Address, etc.)
    labelColor: darkMode ? '#ffffff' : '#111111',
    
    // The Right Column Box Backgrounds
    infoBoxBg: darkMode ? '#1e1e1e' : '#ffffff',
    infoBoxBorder: darkMode ? '1px solid #333' : '1px solid #eee',
    textColor: darkMode ? '#ffffff' : '#333333',
    subTextColor: darkMode ? '#cccccc' : '#666666',
    
    // Business Hours Block Background (The one causing the issue!)
    hoursBoxBg: darkMode ? '#2d2d2d' : '#f4f4f4'
  };

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
      
      {/* LEFT COLUMN: THE FORM */}
      <div style={{ flex: '1', minWidth: '300px' }}>
        <h2 style={{ marginBottom: '20px', color: dynamicStyles.labelColor }}>Send us a message</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <label style={{ color: dynamicStyles.labelColor, fontWeight: 'bold' }}>Full Name</label>
          <input name="name" placeholder="Enter your full name" onChange={handleChange} style={inputStyle} />
          
          <label style={{ color: dynamicStyles.labelColor, fontWeight: 'bold' }}>Email Address</label>
          <input name="email" placeholder="your.email@example.com" onChange={handleChange} style={inputStyle} />
          
          <label style={{ color: dynamicStyles.labelColor, fontWeight: 'bold' }}>Phone Number</label>
          <input name="phone" placeholder="+1 (555) 000-0000" onChange={handleChange} style={inputStyle} />
          
          <label style={{ color: dynamicStyles.labelColor, fontWeight: 'bold' }}>Service Type</label>
          <select name="service" onChange={handleChange} style={inputStyle}>
            <option>Select a service</option>
            <option>Kitchen Tiling</option>
            <option>Bathroom Remodel</option>
            <option>Outdoor Patio</option>
            <option>Ceiling Installation</option>
          </select>

          <label style={{ color: dynamicStyles.labelColor, fontWeight: 'bold' }}>Message</label>
          <textarea name="message" placeholder="Tell us about your project..." rows="4" style={inputStyle}></textarea>
          
          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
      </div>

      {/* RIGHT COLUMN: INFO & HOURS */}
      <div style={{ flex: '0.8', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Contact Information Card */}
        <div style={{ 
          ...infoBoxStyle, 
          backgroundColor: dynamicStyles.infoBoxBg, 
          borderColor: darkMode ? '#333' : '#eee',
          color: dynamicStyles.textColor 
        }}>
          <h3 style={{ color: '#d97706', marginBottom: '15px' }}>Contact Information</h3>
          <p style={{ marginBottom: '10px' }}>📍 <strong>Our Location:</strong> Imperial Reserve, Mafikeng</p>
          <p style={{ marginBottom: '10px' }}>📞 <strong>Call Us:</strong> +27 861 769 01</p>
          <p style={{ marginBottom: '10px' }}>✉️ <strong>Email Us:</strong> taziyaenterprise@gmail.com</p>
        </div>

        {/* Business Hours Card */}
        <div style={{ 
          ...infoBoxStyle, 
          backgroundColor: dynamicStyles.hoursBoxBg, // Dynamic background
          borderColor: darkMode ? '#444' : '#ddd',
          color: dynamicStyles.textColor // Dynamic text color
        }}>
          <h3 style={{ color: '#d97706', marginBottom: '15px' }}>Business Hours</h3>
          <div style={{ ...hourRow, borderColor: darkMode ? '#444' : '#ddd' }}><p style={{margin: '8px 0'}}>Monday - Friday</p><p style={{margin: '8px 0'}}>8:00 AM - 6:00 PM</p></div>
          <div style={{ ...hourRow, borderColor: darkMode ? '#444' : '#ddd' }}><p style={{margin: '8px 0'}}>Saturday</p><p style={{margin: '8px 0'}}>9:00 AM - 4:00 PM</p></div>
          <div style={{ ...hourRow, borderColor: darkMode ? '#444' : '#ddd' }}><p style={{margin: '8px 0'}}>Sunday</p><p style={{margin: '8px 0'}}>Closed</p></div>
        </div>

      </div>
    </div>
  );
};

// Static Styles (Keep at the very bottom outside your component)
const inputStyle = { padding: '12px', borderRadius: '5px', border: '1px solid #ddd', marginBottom: '5px', width: '100%', boxSizing: 'border-box' };
const buttonStyle = { padding: '15px', backgroundColor: '#d97706', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', transition: '0.2s' };
const infoBoxStyle = { padding: '30px', borderRadius: '12px', border: '1px solid', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', transition: 'all 0.3s ease' };
const hourRow = { display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid' };

export default Contact;
