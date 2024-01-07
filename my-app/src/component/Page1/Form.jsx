// src/components/Form.js
// src/components/Form.js
import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className="form-container">
      <div style={{ height: '50vh'}}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <img style={{ height: '100%'}} src='image.png'/>
      <div style={{ fontSize: '30px', textAlign: 'center', paddingTop: '10vh'}}>
        <b>Recevez votre devis gratuit</b>
      </div>
      <div className="actual-form">
        <h2>DEMANDES D'INFORMATIONS</h2>
        <form className='box'>
          <div className='input-container'>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="nickname">Prénom</label>
            <input type="text" id="nickname" name="nickname" />
          </div>
          <div className='input-container'>
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
            <label htmlFor='object'>Object</label>
            <select name="object" id="Object">
              <option value="punaise">Punaise de lits</option>
              <option value="dératisation">Dératisation</option>
              <option value="désinsectisation">Désinsectisation</option>
              <option value="désinfection">Désinfection</option>
            </select>
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
      </div>
      </div>
      <img class='bg' style={{ paddingTop: '330px'}} src='Contact.png'/>
    </div>
  );
};

export default Form;
