import React from 'react';

const SecondPage = () => {
  return (
    <div style={styles.page}>
      <section style={styles.mainSection}>
        <div style={styles.diagonalTextContainer}>
          <p>Nous éliminons, nous repoussons et nous vous protégons des nuisibles</p>
          <p>Nos techniciens sont tous certifiés et nous garantissons nos interventions</p>
        </div>
        <h2 style={styles.title}>PROCESSUS INTERVENTIONS STOP NUISIBLES IDF</h2>
        <div style={styles.cardRow}>
          {renderCard('Contact', 'IMG_2187.jpg')}
          {renderCard('Inspection', 'IMG_2189.jpg')}
          {renderCard('Traitement', 'IMG_2194.jpg')}
          {renderCard('Suivi après traitement', 'IMG_2186.jpg')}
          {/* Add more cards as needed */}
        </div>
        <h2 style={styles.title}>NOS SERVICE</h2>
        <div style={styles.cardRow}>
          {renderCard('Traitement punaise de lit', 'IMG_2189.jpg')}
          {renderCard('Désinsectisation', 'IMG_2193.jpg')}
          {renderCard('Dératisation', 'IMG_2192.jpg')}
          {renderCard('Désinfection', 'IMG_2189.jpg')}
          {/* Add more cards as needed */}
        </div>
      </section>
      {/* Repeat the structure for additional sections */}
    </div>
  );
};

const renderCard = (text, imagePath) => {
  return (
    <div style={styles.card}>
      <img src={imagePath} alt="Card Background" style={styles.cardImage} />
      <b style={styles.cardText}>{text}</b>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    background: '#3498db',
    color: '#fff',
  },
  logo: {
    width: '50px',
    height: '50px',
  },
  headerText: {
    fontSize: '1.5rem',
  },
  mainSection: {
    padding: '40px',
  },
  diagonalTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  diagonalText1: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    padding: '10px',
    margin: '5px',
  },
  diagonalText2: {
    backgroundColor: '#2ecc71',
    color: '#fff',
    padding: '10px',
    margin: '5px',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  cardRow: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '40px',
  },
  card: {
    position: 'relative',
    width: '350px',
    height: '350px',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardText: {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    color: '#fff',
    fontSize: '1rem',
  },
};

export default SecondPage;
