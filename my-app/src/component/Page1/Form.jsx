// src/components/Form.js
// src/components/Form.js
import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className="form-container">
      <div className="actual-form">
        <h2>DEMANDES D'INFORMATIONS</h2>
        <form className='box'>
          <div className='input-container'>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className='input-container'>
            <label htmlFor="nickname">Prénom</label>
            <input type="text" id="nickname" name="nickname" />
          </div>
          <div className='input-container'>
            <label htmlFor="nickname">Téléphone</label>
            <input type="text" id="telephone" name="telephone" />
          </div>
          <div className='input-container'>
            <label htmlFor="nickname">Email</label>
            <input type="text" id="email" name="email" />
          </div>
          <div className='input-container'>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" style={{height: '100px', width: '700px'}}></textarea>
          </div>
          <div className='submit-button'>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <img class='bg' src='IMG_2186.jpg'/>
    </div>
  );
};

export default Form;
