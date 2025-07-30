import React from 'react';

const ComingSoon = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fafafa'
  }}>
    <img
      src={require('../assets/SumoNinja1.png')}
      alt="Coming Soon"
      style={{ maxWidth: 300, marginBottom: 32 }}
    />
    <h1 style={{
      fontFamily: "'Bangers', cursive",
      color: '#222',
      marginBottom: 8,
      fontSize: 56,
      letterSpacing: 2
    }}>
      Sumo Ninja Creative
    </h1>
    <h2 style={{
      fontFamily: "'Montserrat', sans-serif",
      color: '#666',
      fontWeight: 700,
      fontSize: 28
    }}>
      Unleashing Creative Power Soon!
    </h2>
    <p style={{
      fontFamily: "'Montserrat', sans-serif",
      color: '#888',
      marginTop: 24
    }}>
      Stay tuned for something epic.
    </p>
  </div>
);

export default ComingSoon;