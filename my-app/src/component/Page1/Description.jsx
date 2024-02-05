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
                <b>Bienvenue chez Stop Nuisibles IDF :</b><br/>
               <p>
                Votre partenaire de confiance pour tous vos besoins en matière de désinsectisation. Nous sommes spécialisés dans l'élimination efficace des insectes nuisibles, offrant des solutions durables et respectueuses de l'environnement.
                </p> 
                A Stop Nuisibles IDF, nous comprenons l'importance d'un environnement sain et sans parasites. Notre équipe dévouée travaille avec un engagement inébranlable pour vous débarrasser de tout problème d'insectes, qu'il s'agisse de cafards, de fourmis, de punaises de lit, de guêpes, ou d'autres envahisseurs indésirables.
            </div>
          </div>

          <div className="description-pair">
            <div className="description-text">
              <div className="description-title2">
                <b>Pourquoi Nous Choisir ?</b>
              </div>
              <p><b>Expertise Approfondie</b> Nos techniciens expérimentés sont formés pour identifier et traiter efficacement tous types d'infestations.</p>
              <p><b>Solutions Respectueuses de l'Environnement </b>: Nous privilégions des méthodes respectueuses de l'environnement, assurant la sécurité de votre famille et de vos animaux de compagnie.</p>
              <p><b>Personnalisation des Services </b>: Chaque situation est unique. Nous adaptons nos services pour répondre spécifiquement à vos besoins.</p>
              <p><b>Intervention Rapide</b> : Nous comprenons l'urgence. Notre équipe réagit rapidement pour résoudre vos problèmes de parasites dans les plus brefs délais.</p>
            </div>
            <img style={{backgroundColor: 'lightgreen', }}  className="description-image" src="Pourquoi nous choisir.png" alt="Pourquoi nous choisir" />
          </div>

          <div className="description-pair">
            <img className="description-image" src="nos services.png" alt="Nos services" />
            <div className="description-text">
              <div className="description-title">
                <b>Nos Services</b>
              </div>
              <div className='ite'>

              <p> - Désinsectisation générale</p>
              <p> - Traitement contre les punaises de lit</p>
              <p> - Éradication des cafards</p>
              <p> - Contrôle des fourmis</p>
              <p> - Extermination des guêpes et des frelons</p>
              <p> - Dératisation</p>
              <p> - Lutte contre les rongeurs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;