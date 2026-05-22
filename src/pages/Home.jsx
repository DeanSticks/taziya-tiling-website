import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Data for the 'Why Choose Us' section
  const values = [
    { title: "Quality craftsmanship", desc: "Precision work with attention to every detail", icon: "🎖️" },
    { title: "Experienced team", desc: "Over 15 years of professional expertise", icon: "👨‍🔧" },
    { title: "On-time delivery", desc: "Projects completed within agreed timelines", icon: "⏰" },
    { title: "Customer satisfaction", desc: "Dedicated to exceeding your expectations", icon: "✅" }
  ];
   

  return (
    <div>
      {/* SECTION 1: SPLIT HERO */}
      <div style={{ display: 'flex', flexWrap: 'wrap', minHeight: '80vh', backgroundColor: '#1a1a1a' }}>
        
        {/* Left Side: Text */}
        <div style={{ 
          flex: '1', minWidth: '350px', padding: '80px 40px', 
          display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#fff' 
        }}>
          <h1 style={{ fontSize: '3.5rem', lineHeight: '1.2', marginBottom: '20px', fontFamily: 'Montserrat' }}>
            Expert Tiling & <br /> 
            <span style={{ color: '#d97706' }}>Ceiling Solutions</span>
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#ccc', lineHeight: '1.6' }}>
            Transforming spaces from floor to ceiling. We specialize in precision tiling 
            and professional ceiling installations for modern homes and offices.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button style={primaryBtn} onClick={() => navigate('/services')}>
              View Our Work
            </button>
            <button style={secondaryBtn} onClick={() => navigate('/contact')}>
              Get a Quote
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div style={{ 
          flex: '1', minWidth: '350px', position: 'relative',
          backgroundImage: 'url("/gallery/background2.jpg")', 
          backgroundSize: 'cover', backgroundPosition: 'center'
        }}>
          <div style={badgeStyle}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>5⭐Projects Completed</p>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#666' }}>Tiling • Ceilings • Renovations</p>
          </div>
        </div>
      </div>

      {/* SECTION 2: WHY CHOOSE US (The Grid) */}
      <section style={{ padding: '100px 20px', backgroundColor: '#fdfdfd', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', fontFamily: 'Montserrat' }}>Why choose Taziya Premium Tiling</h2>
        <p style={{ color: '#666', marginBottom: '60px' }}>We bring expertise, reliability, and attention to detail to every project</p>
        
        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '40px', maxWidth: '1200px', margin: '0 auto' 
        }}>
          {values.map((item, index) => (
            <div key={index} style={{ padding: '20px' }}>
              <div style={iconBoxStyle}>{item.icon}</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', fontFamily: 'Montserrat' }}>{item.title}</h3>
              <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
          
        </div>
      </section>
    </div>
  );
};

// Styles
const primaryBtn = { padding: '15px 30px', backgroundColor: '#d97706', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' };
const secondaryBtn = { padding: '15px 30px', backgroundColor: 'transparent', color: '#fff', border: '2px solid #fff', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' };
const badgeStyle = { position: 'absolute', bottom: '30px', left: '30px', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', color: '#333' };
const iconBoxStyle = { width: '70px', height: '70px', backgroundColor: '#fff4e6', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px', fontSize: '30px' };

export default Home;
