import React, { useState } from "react";

const RenderCard = ({text, imagePath, description}) => {
    const [isHovering, setIsHovering] = useState(false);
  
    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };
    return (
      <div style={styles.card} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <img src={imagePath} alt="Card Background" style={styles.cardImage} />
        {isHovering ?
            <b style={styles.cardText2}>{description}
            </b>
        :
            <b style={styles.cardText}>{text}</b>
        }
      </div>
    );
};

const styles = {
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
        backgroundColor: `rgba(0, 0, 0, 0.5)`,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '1.5rem',
      },
      cardText2: {
        fontFamily: 'Arial',
        animation: 'fadeIn 5s',                
        backgroundColor: `rgba(0, 0, 0, 0.5)`,
        position: 'absolute',
        height: '100%',
        bottom: '0px',
        left: '0px',
        color: '#fff',
        display: 'flex',
        alignContent: 'center',
        flexWrap: 'wrap',
        fontSize: '1.5rem',
      },
}

export default RenderCard;