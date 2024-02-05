import React, { useState } from 'react';
import RenderCard from './Card';
import './BigPage.css'

const SecondPage = () => {
  return (
    <div style={styles.page}>
      <section style={styles.mainSection}>
        <div style={styles.diagonalTextContainer}>
          <img  style={{height: '70vh', marginTop: '5vh', zIndex: '-1', alignItems: 'center', width: '92%', margin: '10vh'}} src="Image accueil IDF.png" alt="" />
          <div style={{ marginTop:'-15vh', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: '#050f7c' }}>
            <div style={{ display: 'flex', gap: '20%' ,flexDirection: 'row', justifyContent: 'space-around', width: '90%', marginLeft: '4%', marginTop: '20px', flexWrap: 'wrap'}}>
              <b style={styles.diagonalText2}>Dératisation</b>
              <b style={styles.diagonalText2}>Désinsectisation</b>
              <b style={styles.diagonalText2}>Désinfection</b>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: 'white' }}>
          <div>
            <div style={styles.titleText}>
              <h2 style={styles.title}>PROCESSUS INTERVENTIONS STOP NUISIBLES IDF</h2>
            </div>
            <div style={styles.cardRow}>
              <RenderCard text='Contact' imagePath='IMG_2187.jpg' description='Expression de vo(s)tre besoin(s)Mise en relation avec un de nos techniciens agréés'/>
              <RenderCard text='Inspection' imagePath='IMG_2189.jpg' description='Le technicien établira un rapport de la situation (type et taux d`infestation définira un protocole de traitement personnalisé  et un devis sera remis'/>
              <RenderCard text='Traitement' imagePath='IMG_2182.jpg' description='Mise en œuvre du traitement défini par le technicien agréé'/>
              <RenderCard text='Suivi après traitement' imagePath='IMG_2186.jpg' description='Nos traitements sont garantis selon le type d`infestation	'/>
              {/* Add more cards as needed */}
            </div>
          </div>
          <div>
            <div style={styles.titleText}>
              <h2 style={styles.title}>NOS SERVICES</h2>
              <p style={{ fontSize: '20px'}}>Lors de l'inspection, notre équipe technique défini un protocole de traitement personnalisé.<br/>Ci-dessous les différentes méthodes professionnelles que nous utlisons, dans le plus grand respect de votre environnement.</p>
            </div>
            <div style={styles.cardRow}>
              <RenderCard text='Traitement punaise de lit' imagePath='IMG_2192.jpg' description='Traitement chimique "curatif" Traitement thermique par vapeur sèche, Piégeage'/>
              <RenderCard text='Désinsectisation' imagePath='IMG_2193.jpg' description='Traitement chimique, utilisation de produits insecticides, fumigation des locaux'/>
              <RenderCard text='Dératisation' imagePath='IMG_2194.jpg' description='Lutte mécanique, appâtage permanent, pose de pièges'/>
              <RenderCard text='Désinfection' imagePath='IMG-2023.jpg' description='Désinfection "de surface" Désinfection "par voie aérienne"'/>
            </div>
          </div>
        </div>
      </section>
      {/* Repeat the structure for additional sections */}
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
    justifyContent: 'space-evenly',
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
    padding: '5vh',
  },
  diagonalTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '5px',
    marginTop: '-20px',
    height: '100%',
    overflow: 'hidden'
  },
  diagonalText1: {
    fontSize: '25px',
    padding: '10px',
    margin: '15px',
    marginTop: '250px',
    alignItems: 'center',
  },
  diagonalText2: {
    padding: '10px',
    alignItems: 'center',
    fontSize: "25px"
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    paddingTop: '2vh',
  },
  cardRow: {
    display: 'grid',
    gridTemplateColumns: "20% 20% 20% 20%",
    gap : "7vh",
    justifyContent: 'center',
    padding: '2vh'
  },
  card: {
    position: 'relative',
    width: '3vh',
    height: '3vh',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default SecondPage;
