// 1. We pass { darkMode } into the function arguments
const About = ({ darkMode }) => {
  
  // 2. We define the color logic for dark mode vs light mode
  const dynamicStyles = {
    titleColor: darkMode ? '#ffffff' : '#111111',
    paragraphColor: darkMode ? '#cccccc' : '#444444',
    
    // The 3-column promise container at the bottom
    promiseBoxBg: darkMode ? '#1e1e1e' : '#f9f9f9',
    promiseBoxText: darkMode ? '#ffffff' : '#111111',
    promiseBoxSubText: darkMode ? '#aaaaaa' : '#666666',
    promiseBoxBorder: darkMode ? '1px solid #333' : '1px solid transparent'
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px', fontFamily: 'Inter' }}>
      
      {/* SECTION 1: OUR STORY */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', marginBottom: '80px' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', fontFamily: 'Montserrat', color: dynamicStyles.titleColor }}>
            Our Story
          </h1>
          <p style={{ lineHeight: '1.8', color: dynamicStyles.paragraphColor }}>
            Taziya Enterprise started with a simple goal: to provide high-quality craftsmanship that lasts a lifetime. 
            What began as a small family operation has grown into a leading tiling and ceiling specialist serving the local community.
          </p>
          <p style={{ lineHeight: '1.8', color: dynamicStyles.paragraphColor }}>
            We believe that your home deserves the best. Whether it's a small kitchen backsplash or a massive commercial 
            ceiling installation, we bring the same level of precision and passion to every square meter.
          </p>
        </div>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img 
            src="/gallery/background1.jpg" 
            alt="At work" 
            style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
          />
        </div>
      </div>

      {/* SECTION 2: OUR PROMISE (3 Columns) */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '30px', 
        backgroundColor: dynamicStyles.promiseBoxBg, // Dynamic background tint
        border: dynamicStyles.promiseBoxBorder,
        padding: '40px', 
        borderRadius: '20px',
        color: dynamicStyles.promiseBoxText, // Dynamic title headings color
        transition: 'all 0.3s ease'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'Montserrat', margin: '0 0 10px 0' }}>Quality Materials</h3>
          <p style={{ fontSize: '0.9rem', color: dynamicStyles.promiseBoxSubText, margin: 0 }}>
            We only use industry-leading adhesives and premium tiles.
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'Montserrat', margin: '0 0 10px 0' }}>Precision Cuts</h3>
          <p style={{ fontSize: '0.9rem', color: dynamicStyles.promiseBoxSubText, margin: 0 }}>
            Laser-accurate measurements for a perfect finish every time.
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'Montserrat', margin: '0 0 10px 0' }}>Full Insurance</h3>
          <p style={{ fontSize: '0.9rem', color: dynamicStyles.promiseBoxSubText, margin: 0 }}>
            Your property is safe with us. We are fully licensed and insured.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;
