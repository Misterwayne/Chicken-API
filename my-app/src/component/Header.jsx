// src/components/Header.js
import React from 'react';
import PhoneIcon from './PhoneIcon'; // Import the PhoneIcon component

const Header = () => {
  return (
    <header style={styles.header}>
    <img src="Logo_FInal_T.png" alt="Logo Left" style={styles.logo} />
        <div>
          <h1 style={styles.headerText}><img src="Image_site_1T.png" alt="Logo Left" style={styles.logo}/></h1>
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
    padding: '1vh',
    background: `rgba(255,255,255,0.9)`,
    color: 'black'
  },
  logo: {
    height: 120,
    paddingTop: '4vh'
  }
}

export default Header;
