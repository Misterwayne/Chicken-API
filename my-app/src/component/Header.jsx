// src/components/Header.js
import React from 'react';
import PhoneIcon from './PhoneIcon'; // Import the PhoneIcon component

const Header = () => {
  return (
    <header style={styles.header}>
        <img src="Desinsectisation.png" alt="Logo Left" style={styles.logo} />
        <div>
          <h1 style={styles.headerText}>STOP NUISIBLES IDF</h1>
          <PhoneIcon/>
        </div>
        <img src="img.jpg" alt="Logo Right" style={styles.logo} />
      </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    background: 'blue',
    color: '#fff',
    height: '60px'
  },
  logo: {
    height: 100
  }
}

export default Header;
