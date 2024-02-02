// src/components/Form.js
import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className="form-container">
      <div className="form-content">
        <div className="form-header">
        <div className="image-text-pair">
            <img className="form-image" src="carte_idf-removebg-preview.png" alt="Placeholder Image"/>
            <div className="form-text" style={{ color: '#fff'}}>
            Nous intervenons non seulement dans la région parisienne, mais également en dehors de l’Ile-de-France, sous certaines conditions. Notre équipe d’experts est prête à répondre à vos besoins, où que vous soyez, en assurant des services de lutte contre les nuisibles adaptés à vos spécificités locales.
            Nos interventions sont disponibles 7 j/7 et 24h /24, garantissant une réponse rapide et adaptée à vos besoins que ce soit pour un diagnostic approfondi, des conseils sur mesure ou la mise en place de solutions efficaces. STOP NUISIBLES IDF votre partenaire de confiance pour garantir la qualité et l’efficacité de chaque intervention. Faites appel à notre expertise, que vous soyez basé dans la région parisienne ou au-delà, et dites adieu aux problèmes de nuisibles
            </div>
        </div>
        </div>
          <div className="form-text2">
            <h2>Recevez votre devis</h2>
          </div>

          <h2>DEMANDES D'INFORMATIONS</h2>
        <div className="actual-form">
          <form className="box">
              <label htmlFor="name">Nom</label>
            <div className="input-container">
              <input type="text" id="name" name="name" />
            </div>
              <label htmlFor="nickname">Prénom</label>
            <div className="input-container">
              <input type="text" id="nickname" name="nickname" />
            </div>

              <label htmlFor="telephone">Téléphone</label>
            <div className="input-container">
              <input type="text" id="telephone" name="telephone" />
            </div>

              <label htmlFor="email">Email</label>
            <div className="input-container">
              <input type="text" id="email" name="email" />
            </div>

              <label htmlFor="object">Object</label>
            <div className="input-container">
              <select style={{width: '22vh', height: '3vh'}} name="object" id="Object">
                <option value="punaise">Punaise de lits</option>
                <option value="deratisation">Dératisation</option>
                <option value="desinsectisation">Désinsectisation</option>
                <option value="desinfection">Désinfection</option>
                <option value="desinfection">Autre</option>
              </select>
            </div>
              <label htmlFor="message">Message</label>
            <div className="input-container">
              <textarea id="message" name="message" style={{ height: '100px', width: '50vh' }}></textarea>
            </div>

            <div className="submit-button">
              <button type="submit">Envoyer</button>
            </div>
          </form>
          <div className="form-images">
            <img className="bg" src="Contact.png" alt="Background" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Form;
