// src/components/Description.js
import React from 'react';
import './Description.css';

const Description = () => {
  return (
    <section className="description">
      <div className="description-content">
        <div className="description-text-box">
          <div className="description-pair">
            <img className="description-image" src="A propos.png" alt="A propos" />
            <div className="description-text">
              <div className="description-title">
                <b>Notre Entreprise</b>
              </div>
              Bienvenue chez Stop Nuisibles IDF :
              Votre partenaire de confiance pour tous vos besoins en matière de désinsectisation.
              Nous sommes spécialisés dans l'élimination efficace des insectes nuisibles,
              offrant des solutions durables et respectueuses de l'environnement.
            </div>
          </div>

          <div className="description-pair">
            <div className="description-text">
              <div className="description-title2">
                <b>Pourquoi Nous Choisir ?</b>
              </div>
              <p>Expertise Approfondie : Nos techniciens expérimentés sont formés pour identifier et traiter efficacement tous types d'infestations.</p>
              <p>Solutions Respectueuses de l'Environnement : Nous privilégions des méthodes respectueuses de l'environnement, assurant la sécurité de votre famille et de vos animaux de compagnie.</p>
              <p>Personnalisation des Services : Chaque situation est unique. Nous adaptons nos services pour répondre spécifiquement à vos besoins.</p>
              <p>Intervention Rapide : Nous comprenons l'urgence. Notre équipe réagit rapidement pour résoudre vos problèmes de parasites dans les plus brefs délais.</p>
            </div>
            <img style={{backgroundColor: 'lightgreen', }}  className="description-image" src="Pourquoi nous choisir.png" alt="Pourquoi nous choisir" />
          </div>

          <div className="description-pair">
            <img className="description-image" src="nos services.png" alt="Nos services" />
            <div className="description-text">
              <div className="description-title">
                <b>Nos Services</b>
              </div>
              <p>Désinsectisation générale</p>
              <p>Traitement contre les punaises de lit</p>
              <p>Éradication des cafards</p>
              <p>Contrôle des fourmis</p>
              <p>Extermination des guêpes et des frelons</p>
              <p>Dératisation</p>
              <p>Lutte contre les rongeurs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;