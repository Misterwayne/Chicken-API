import React from 'react';


const PhoneIcon = () => {
  return (
    <div style={{fontSize:'25px',paddingTop: '3%'}}>
      <p><b>Contactez-nous au :</b>
      📞 <span style={styles.header}>01 75 36 17 52</span>
      </p>
    </div>
  );
};

const styles = {
  header: {
    background: '#162adb',
    color: 'white',
    fontSize: '3.2vh',
    borderRadius: '10px',
    margin: '5px',
    padding: '2px'
  },
  logo: {
    height: 120,
    paddingTop: '4vh'
  }
}

export default PhoneIcon;
