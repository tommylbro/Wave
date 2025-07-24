import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// We will define Feed, Profile, and Media directly in this file,
// so we no longer need to import them from separate files.
// import Home from "./pages/Home.jsx"; // Keeping Home, Stream, Streamroom as external for brevity
// import Stream from "./pages/Stream.jsx";
// import Streamroom from "./pages/Streamroom.jsx";


// Placeholder for Home, Stream, Streamroom if you want to keep them external.
// If you want them inline too, you would define them similarly to Feed, Profile, Media below.
function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: "'Cinzel Decorative', serif", color: '#36454F' }}>
      <h2 style={{ fontFamily: "'Philosopher', sans-serif", color: '#DAA520', fontSize: '2em' }}>Welcome to Mythos Stream</h2>
      <p style={{ fontSize: '1.1em', lineHeight: '1.6' }}>Embark on a journey through ancient sagas and legendary broadcasts.</p>
    </div>
  );
}

function Stream() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: "'Cinzel Decorative', serif", color: '#36454F' }}>
      <h2 style={{ fontFamily: "'Philosopher', sans-serif", color: '#4682B4', fontSize: '2em' }}>Live Streams from the Divine Realms</h2>
      <p style={{ fontSize: '1.1em', lineHeight: '1.6' }}>Witness the epic battles and serene rituals as they unfold.</p>
    </div>
  );
}

function Streamroom() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: "'Cinzel Decorative', serif", color: '#36454F' }}>
      <h2 style={{ fontFamily: "'Philosopher', sans-serif", color: '#8B4513', fontSize: '2em' }}>Enter a Mythic Stream Room</h2>
      <p style={{ fontSize: '1.1em', lineHeight: '1.6' }}>Connect with fellow mortals and gods in real-time discussions.</p>
    </div>
  );
}


// --- INLINE STYLED FEED COMPONENT ---
function Feed() {
  return (
    <div
      style={{
        padding: '25px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly more opaque for content
        borderRadius: '15px',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
        border: '1px solid #DAA520', // Goldenrod border
        fontFamily: "'Cinzel Decorative', serif",
        color: '#36454F',
        textAlign: 'left', // Align text left for readability
      }}
    >
      <h2
        style={{
          fontFamily: "'Philosopher', sans-serif",
          color: '#DAA520', // Goldenrod for headings
          fontSize: '2.2em',
          marginBottom: '20px',
          borderBottom: '2px solid #4682B4', // Steel Blue underline
          paddingBottom: '10px',
          textAlign: 'center',
        }}
      >
        Echoes of Olympus & Edo
      </h2>

      <p style={{ fontSize: '1.1em', lineHeight: '1.6', marginBottom: '20px' }}>
        Welcome to your mythological feed, where tales of ancient heroes and divine beings unfold. Discover new prophecies, heroic deeds, and whispers from the spirit world.
      </p>

      {/* Example Feed Item 1 */}
      <div
        style={{
          backgroundColor: 'rgba(240, 248, 255, 0.7)', // AliceBlue with transparency
          padding: '15px',
          borderRadius: '10px',
          marginBottom: '15px',
          border: '1px solid #B0C4DE', // Light steel blue border
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
        }}
      >
        <h3 style={{ color: '#4682B4', fontSize: '1.5em', marginBottom: '5px' }}>
          A New Oracle from Delphi
        </h3>
        <p style={{ fontSize: '0.95em', color: '#556B2F' }}>
          The High Priestess has spoken! A new quest awaits those brave enough to face the Minotaur's labyrinth. Are you ready to answer the call?
        </p>
        <small style={{ color: '#808080' }}>Posted by Oracle of Apollo - 1 hour ago</small>
      </div>

      {/* Example Feed Item 2 */}
      <div
        style={{
          backgroundColor: 'rgba(255, 250, 240, 0.7)', // FloralWhite with transparency
          padding: '15px',
          borderRadius: '10px',
          marginBottom: '15px',
          border: '1px solid #D2B48C', // Tan border
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
        }}
      >
        <h3 style={{ color: '#8B4513', fontSize: '1.5em', marginBottom: '5px' }}>
          Whispers from the Spirit World
        </h3>
        <p style={{ fontSize: '0.95em', color: '#696969' }}>
          Reports from the Bamboo Forest speak of Kitsune sightings and mischievous Yokai. Approach with caution and respect.
        </p>
        <small style={{ color: '#808080' }}>Posted by Shrine Keeper - 3 hours ago</small>
      </div>

      <button
        style={{
          backgroundColor: '#DAA520', // Goldenrod button
          color: 'white',
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1em',
          fontWeight: 'bold',
          marginTop: '20px',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#B8860B'; // Darker gold on hover
          e.currentTarget.style.transform = 'scale(1.02)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#DAA520';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        Load More Ancient Scrolls
      </button>
    </div>
  );
}

// --- INLINE STYLED PROFILE COMPONENT ---
function Profile() {
  return (
    <div
      style={{
        padding: '25px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '15px',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
        border: '1px solid #4682B4', // Steel Blue border
        fontFamily: "'Cinzel Decorative', serif",
        color: '#36454F',
        textAlign: 'center', // Center content for a profile page
      }}
    >
      <h2
        style={{
          fontFamily: "'Philosopher', sans-serif",
          color: '#4682B4', // Steel Blue for headings
          fontSize: '2.2em',
          marginBottom: '20px',
          borderBottom: '2px solid #DAA520', // Goldenrod underline
          paddingBottom: '10px',
        }}
      >
        Chronicles of the Hero
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <img
          src="/images/profile_avatar_myth.png" // Placeholder for a mythological avatar
          alt="Profile Avatar"
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid #FFD700', // Gold border for avatar
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            marginBottom: '15px',
          }}
        />
        <h3 style={{ color: '#DAA520', fontSize: '1.8em', marginBottom: '5px' }}>
          Ares-san (The Valiant)
        </h3>
        <p style={{ fontSize: '1.1em', color: '#556B2F' }}>
          Guardian of the Sacred Grove and Master of the Katana.
        </p>
      </div>

      <div
        style={{
          backgroundColor: 'rgba(245, 245, 220, 0.7)', // Beige with transparency
          padding: '20px',
          borderRadius: '10px',
          border: '1px solid #D2B48C',
          marginBottom: '20px',
          textAlign: 'left',
        }}
      >
        <h4 style={{ color: '#8B4513', fontSize: '1.3em', marginBottom: '10px' }}>
          Mythological Feats
        </h4>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '8px' }}>
            <span style={{ color: '#4682B4', fontWeight: 'bold' }}>• Conquered the Hydra:</span> Aided in the defeat of the nine-headed beast.
          </li>
          <li style={{ marginBottom: '8px' }}>
            <span style={{ color: '#4682B4', fontWeight: 'bold' }}>• Attained Kusanagi no Tsurugi:</span> Recovered the legendary sword from Orochi.
          </li>
          <li style={{ marginBottom: '8px' }}>
            <span style={{ color: '#4682B4', fontWeight: 'bold' }}>• Built the Parthenon's Gates:</span> Contributed to the divine architecture.
          </li>
        </ul>
      </div>

      <button
        style={{
          backgroundColor: '#4682B4', // Steel Blue button
          color: 'white',
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1em',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#36648B'; // Darker steel blue on hover
          e.currentTarget.style.transform = 'scale(1.02)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#4682B4';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        Edit Divine Profile
      </button>
    </div>
  );
}

// --- INLINE STYLED MEDIA COMPONENT ---
function Media() {
  // Placeholder data for mythological media
  const mediaItems = [
    {
      id: 1,
      type: 'image',
      src: '/images/media_perseus_medusa.png', // Placeholder image
      alt: 'Perseus and Medusa',
      title: 'Perseus & Medusa: A Hero\'s Gaze',
      description: 'A depiction of the legendary hero Perseus confronting the Gorgon Medusa, avoiding her petrifying stare.',
    },
    {
      id: 2,
      type: 'image',
      src: '/images/media_amaterasu_cave.png', // Placeholder image
      alt: 'Amaterasu Emerging',
      title: 'Amaterasu: Sun Goddess Emerges',
      description: 'The moment the sun goddess Amaterasu emerges from the Amano-Iwato cave, bringing light back to the world.',
    },
    {
      id: 3,
      type: 'image',
      src: '/images/media_cerberus_gate.png', // Placeholder image
      alt: 'Cerberus at the Underworld Gate',
      title: 'Cerberus: Guardian of the Underworld',
      description: 'The fearsome three-headed hound, Cerberus, standing guard at the gates of Hades.',
    },
    {
      id: 4,
      type: 'image',
      src: '/images/media_dragon_ryujin.png', // Placeholder image
      alt: 'Ryujin, Dragon God',
      title: 'Ryujin: Lord of the Seas',
      description: 'A magnificent depiction of Ryujin, the benevolent dragon god of the sea in Japanese mythology, controlling the tides.',
    },
  ];

  return (
    <div
      style={{
        padding: '25px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '15px',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
        border: '1px solid #DAA520',
        fontFamily: "'Cinzel Decorative', serif",
        color: '#36454F',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontFamily: "'Philosopher', sans-serif",
          color: '#DAA520',
          fontSize: '2.2em',
          marginBottom: '20px',
          borderBottom: '2px solid #4682B4',
          paddingBottom: '10px',
        }}
      >
        Mythological Gallery
      </h2>

      <p style={{ fontSize: '1.1em', lineHeight: '1.6', marginBottom: '30px' }}>
        Behold, a collection of divine imagery and heroic moments from both Greek and Japanese mythologies.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Responsive grid
          gap: '25px',
          justifyContent: 'center',
        }}
      >
        {mediaItems.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: 'rgba(240, 248, 255, 0.7)',
              padding: '15px',
              borderRadius: '12px',
              border: '1px solid #B0C4DE',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0px 8px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.1)';
            }}
          >
            <img
              src={item.src}
              alt={item.alt}
              style={{
                width: '100%',
                height: '180px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '10px',
                border: '2px solid #DAA520', // Golden border for images
              }}
            />
            <h3 style={{ color: '#4682B4', fontSize: '1.3em', marginBottom: '5px' }}>
              {item.title}
            </h3>
            <p style={{ fontSize: '0.9em', color: '#556B2F', lineHeight: '1.4' }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <button
        style={{
          backgroundColor: '#DAA520',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1em',
          fontWeight: 'bold',
          marginTop: '30px',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#B8860B';
          e.currentTarget.style.transform = 'scale(1.02)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#DAA520';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        Explore More Artifacts
      </button>
    </div>
  );
}


function App() {
  return (
    <Router>
      <div
        style={{
          background: "linear-gradient(135deg, #f0e68c, #add8e6, #87ceeb)",
          minHeight: "100vh",
          fontFamily: "'Cinzel Decorative', serif",
          color: "#36454F",
          paddingTop: "40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* --- Background Mythology Elements --- */}
        {/* Greek Column / Temple silhouette (subtle, as a background overlay) */}
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "0%",
            width: "300px",
            height: "auto",
            opacity: 0.1,
            backgroundImage: "url('/images/greek_column_silhouette.png')", // Ensure this file exists here
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
        {/* Japanese Cherry Blossom / Cloud pattern (subtle, as a background overlay) */}
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            right: "0%",
            width: "400px",
            height: "auto",
            opacity: 0.1,
            backgroundImage: "url('/images/japanese_wave_pattern.png')", // Ensure this file exists here
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />

        {/* Logo Section */}
        <div
          style={{
            position: "relative",
            height: "100px",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Top-left logo - using the suggested combined logo image path */}
          <img
            src="/images/greek_japanese_logo_corner.png" // Corrected path for the combined logo
            alt="Mythos App Logo"
            style={{
              position: "absolute",
              top: 0,
              left: "20px",
              height: "80px",
              width: "80px",
              borderRadius: "50%",
              boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.7)",
              objectFit: "cover",
            }}
          />
          {/* Top-center main app title/logo */}
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontFamily: "'Philosopher', sans-serif",
                fontSize: "3.5em",
                color: "#FFD700",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                letterSpacing: "3px",
                margin: 0,
                padding: "15px 30px",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderRadius: "15px",
                border: "2px solid #DAA520",
              }}
            >
              Mythos Stream
            </h1>
          </div>
        </div>

        {/* Nav + Pages under the logo */}
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
            border: "1px solid #ddd",
          }}
        >
          {/* Navigation */}
          <nav style={{ marginBottom: "30px", borderBottom: "2px solid #DAA520", paddingBottom: "15px" }}>
            {/* Note: The previous "Reusable Link style" block was incorrect React syntax
                for applying styles to multiple links this way.
                The styles are correctly applied to each Link individually below.
                This commented-out block is kept as-is to preserve user's previous input.
            */}
            {/*
            {({ children, to }) => (
              <Link
                to={to}
                style={{
                  margin: "0 15px",
                  textDecoration: "none",
                  color: "#4682B4",
                  fontWeight: "bold",
                  fontSize: "1.1em",
                  padding: "8px 12px",
                  borderRadius: "10px",
                  transition: "all 0.3s ease",
                  backgroundColor: "transparent",
                  border: "1px solid transparent",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 215, 0, 0.2)";
                  e.currentTarget.style.color = "#DAA520";
                  e.currentTarget.style.border = "1px solid #DAA520";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#4682B4";
                  e.currentTarget.style.border = "1px solid transparent";
                }}
              >
                {children}
              </Link>
            )}
            */}
            <Link
              to="/"
              style={{
                margin: "0 15px",
                textDecoration: "none",
                color: "#4682B4",
                fontWeight: "bold",
                fontSize: "1.1em",
                padding: "8px 12px",
                borderRadius: "10px",
                transition: "all 0.3s ease",
                backgroundColor: "transparent",
                border: "1px solid transparent",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 215, 0, 0.2)";
                e.currentTarget.style.color = "#DAA520";
                e.currentTarget.style.border = "1px solid #DAA520";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#4682B4";
                e.currentTarget.style.border = "1px solid transparent";
              }}
            >
              Home
            </Link>
            <Link
              to="/stream"
              style={{
                margin: "0 15px",
                textDecoration: "none",
                color: "#4682B4",
                fontWeight: "bold",
                fontSize: "1.1em",
                padding: "8px 12px",
                borderRadius: "10px",
                transition: "all 0.3s ease",
                backgroundColor: "transparent",
                border: "1px solid transparent",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 215, 0, 0.2)";
                e.currentTarget.style.color = "#DAA520";
                e.currentTarget.style.border = "1px solid #DAA520";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#4682B4";
                e.currentTarget.style.border = "1px solid transparent";
              }}
            >
              Stream
            </Link>
            <Link
              to="/streamroom"
              style={{
                margin: "0 15px",
                textDecoration: "none",
                color: "#4682B4",
                fontWeight: "bold",
                fontSize: "1.1em",
                padding: "8px 12px",
                borderRadius: "10px",
                transition: "all 0.3s ease",
                backgroundColor: "transparent",
                border: "1px solid transparent",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 215, 0, 0.2)";
                e.currentTarget.style.color = "#DAA520";
                e.currentTarget.style.border = "1px solid #DAA520";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#4682B4";
                e.currentTarget.style.border = "1px solid transparent";
              }}
            >
              Stream Room
            </Link>
            {/* New Navigation Links */}
            <Link
              to="/feed"
              style={{
                margin: "0 15px",
                textDecoration: "none",
                color: "#4682B4",
                fontWeight: "bold",
                fontSize: "1.1em",
                padding: "8px 12px",
                borderRadius: "10px",
                transition: "all 0.3s ease",
                backgroundColor: "transparent",
                border: "1px solid transparent",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 215, 0, 0.2)";
                e.currentTarget.style.color = "#DAA520";
                e.currentTarget.style.border = "1px solid #DAA520";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#4682B4";
                e.currentTarget.style.border = "1px solid transparent";
              }}
            >
              Feed
            </Link>
            <Link
              to="/profile"
              style={{
                margin: "0 15px",
                textDecoration: "none",
                color: "#4682B4",
                fontWeight: "bold",
                fontSize: "1.1em",
                padding: "8px 12px",
                borderRadius: "10px",
                transition: "all 0.3s ease",
                backgroundColor: "transparent",
                border: "1px solid transparent",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 215, 0, 0.2)";
                e.currentTarget.style.color = "#DAA520";
                e.currentTarget.style.border = "1px solid #DAA520";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#4682B4";
                e.currentTarget.style.border = "1px solid transparent";
              }}
            >
              Profile
            </Link>
            <Link
              to="/media"
              style={{
                margin: "0 15px",
                textDecoration: "none",
                color: "#4682B4",
                fontWeight: "bold",
                fontSize: "1.1em",
                padding: "8px 12px",
                borderRadius: "10px",
                transition: "all 0.3s ease",
                backgroundColor: "transparent",
                border: "1px solid transparent",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 215, 0, 0.2)";
                e.currentTarget.style.color = "#DAA520";
                e.currentTarget.style.border = "1px solid #DAA520";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#4682B4";
                e.currentTarget.style.border = "1px solid transparent";
              }}
            >
              Media
            </Link>
          </nav>

          {/* Page content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stream" element={<Stream />} />
            <Route path="/streamroom" element={<Streamroom />} />
            {/* New Routes for Feed, Profile, and Media, now using the inline components */}
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/media" element={<Media />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;