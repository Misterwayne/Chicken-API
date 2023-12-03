import React from 'react';
import Description from '../Page1/Description';


const MyPage = () => {
  return (
    <div style={styles.page}>
      <Description/>
      <p style={styles.bottomLeftText}>
      <b>
        Nos services <br/>
      </b>
        Traitement punaise de lit	<br/>
      Désinsectisation	<br/>
      Dératisation	<br/>
      Désinfection	</p>
    </div>
  );
};

const styles = {
  logo1: {
    position: 'absolute',
    top: 150,
    right: 10,
    width: 50, // Adjust as needed
    height: 50, // Adjust as needed
  },
  logo2: {
    position: 'absolute',
    top: 150,
    left: 100,
    width: 50, // Adjust as needed
    height: 50, // Adjust as needed
  },
  title: {
    position: 'absolute',
    top: 150,
    fontSize: '2rem', // Adjust as needed
    marginBottom: 20,
  },
  centeredText: {
    textAlign: 'center',
    maxWidth: 600, // Adjust as needed
  },
  bottomLeftText: {
    backgroundColor: 'blue', 
    position: 'absolute',
    color: 'white',
    bottom: 10,
    left: 10,
  },
};

export default MyPage;
