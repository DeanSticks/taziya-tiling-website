import { useState } from 'react';
const Services = () => {
  const serviceList = [
    { title: "Kitchen Tiling", desc: "Heat-resistant and easy-clean surfaces.", icon: "🍳" },
    { title: "Bathroom Remodel", desc: "Waterproof luxury for your private oasis.", icon: "🚿" },
    { title: "Outdoor Patios", desc: "Durable, weather-proof stone tiling.", icon: "☀️" },
    { title: "Floor Leveling", desc: "The perfect foundation for a flat finish.", icon: "📐" }
    
  ];
   const galleryImages = [
    { url: "/gallery/tile1.jpg", alt: "Large format floor tiles", category: "tiling" },
    { url: "/gallery/tile2.jpg", alt: "Mosaic shower wall", category: "tiling" },
    { url: "/gallery/tile3.jpg", alt: "Verandah tiling" , category: "tiling" },
    { url: "/gallery/ceiling1.jpg", alt: "Ceiling Installation", category: "ceiling" }, 
    { url: "/gallery/ceiling2.jpg", alt: "Ceiling Installation", category: "ceiling" }
    
  ];
const [serviceType, setServiceType] = useState('floor-tiling');
  const [area, setArea] = useState(0);

  const rates = {
    'floor-tiling': 250,  
    'wall-tiling': 280,
    'pvc-ceiling': 180,
    'plaster-ceiling': 220
  };
   const calculateTotal = () => {
    return area * rates[serviceType];
  };
const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div style={{ padding: '50px 20px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '40px', fontSize: '2rem' }}>Our Specialties</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {serviceList.map((service, index) => (
          <div key={index} style={{ 
            padding: '30px', 
            border: '1px solid #ddd', 
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>{service.icon}</div>
            <h3 style={{ color: '#d97706' }}>{service.title}</h3>
            <p style={{ color: '#666' }}>{service.desc}</p>
          </div>
        ))}
      </div>
      <hr style={{ border: '0', borderTop: '1px solid #eee', marginBottom: '60px' }} />
{/* SECTION 2: THE GALLERY */}
      <h2 style={{ textAlign: 'center', marginBottom: '10px', fontSize: '2rem' }}>Our Work in Action</h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>Take a look at some of our recent transformations.</p>
      {/* CATEGORY FILTER BUTTONS */}
<div style={{ 
  display: 'flex', 
  justifyContent: 'center', 
  gap: '15px', 
  marginBottom: '30px' 
}}>
  <button 
    onClick={() => setActiveFilter('all')} 
    style={activeFilter === 'all' ? activeBtnStyle : inactiveBtnStyle}
  >
    All Work
  </button>
  <button 
    onClick={() => setActiveFilter('tiling')} 
    style={activeFilter === 'tiling' ? activeBtnStyle : inactiveBtnStyle}
  >
    Floor Tiling
  </button>
  <button 
    onClick={() => setActiveFilter('ceiling')} 
    style={activeFilter === 'ceiling' ? activeBtnStyle : inactiveBtnStyle}
  >
    PVC Ceilings
  </button>
</div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '15px' 
      }}>
        <div style={{ 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
  gap: '15px' 
}}>
  {galleryImages
    .filter(image => activeFilter === 'all' || image.category === activeFilter)
    .map((image, index) => (
      <div key={index} style={{ overflow: 'hidden', borderRadius: '8px', height: '250px' }}>
        <img 
          src={image.url} 
          alt={image.alt} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }} 
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>
  ))}
</div>

      </div>
<div style={{ 
        maxWidth: '600px', 
        margin: '0 auto', 
        padding: '40px', 
        backgroundColor: '#f9f9f9', 
        borderRadius: '15px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        color: 'black'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '10px', fontFamily: 'Montserrat' }}>Instant Cost Estimator</h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px', fontSize: '0.9rem' }}>Get a quick estimation for your project layout.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
            <label style={{ fontWeight: 'bold' }}>Select Service</label>
            <select value={serviceType} onChange={(e) => setServiceType(e.target.value)} style={inputStyle}>
              <option value="floor-tiling">Floor Tiling</option>
              <option value="wall-tiling">Wall Tiling</option>
              <option value="pvc-ceiling">PVC Ceiling Installation</option>
              <option value="plaster-ceiling">Plaster Ceiling Installation</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
            <label style={{ fontWeight: 'bold' }}>Total Area (Square Meters - m²)</label>
            <input 
              type="number" 
              min="0"
              placeholder="e.g. 25" 
              value={area || ''} 
              onChange={(e) => setArea(Number(e.target.value))}
              style={inputStyle}
            />
          </div>

          <div style={{ 
            marginTop: '20px', padding: '20px', backgroundColor: '#fff4e6', 
            borderRadius: '10px', textAlign: 'center', border: '1px solid #ffe3c1'
          }}>
            <h3 style={{ margin: '0 0 5px 0', color: '#666', fontSize: '1rem' }}>Estimated Total Cost</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#d97706' }}>
              R {calculateTotal().toLocaleString()}*
            </div>
            <p style={{ margin: '10px 0 0 0', fontSize: '0.8rem', color: '#888' }}>
              *Estimation only. Excludes materials, intricate designs, or surface preparation.
            </p>
          </div>

        </div>
      </div>


    </div>
  );
};
const inputStyle = { padding: '12px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem', backgroundColor: 'white' };
const activeBtnStyle = {
  padding: '10px 20px',
  backgroundColor: '#d97706', // Your brand orange
  color: 'white',
  border: 'none',
  borderRadius: '20px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: '0.2s'
};

const inactiveBtnStyle = {
  padding: '10px 20px',
  backgroundColor: '#f3f4f6',
  color: '#4b5563',
  border: '1px solid #e5e7eb',
  borderRadius: '20px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: '0.2s'
};

export default Services;