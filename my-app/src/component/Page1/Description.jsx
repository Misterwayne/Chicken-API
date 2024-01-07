// src/components/Description.js
import React from 'react';

const Description = () => {
  return (
    <section className="description">
      <div className="description-content">
        <div className="description-text-box" style={{ paddingLeft: '15%' }}>
          <div style={{alignContent: 'center', display: 'grid', gridTemplateColumns: '50% 1% 49%', width: '80%', padding: `2vh`}}>
            <div style={{backgroundColor: '#dfe6e775', fontSize: '20px', justifyContent: 'center', alignItems: 'center'}}>
                <b style={{paddingLeft: '0%'}}>Notre Entreprise</b>
                <ul>
                <div style={{padding: `2vh`}}>
                  <b>Bienvenue chez Stop Nuisibles IDF</b> :<br/>Votre partenaire de confiance pour tous vos besoins en matière de désinsectisation.
                  Nous sommes spécialisés dans l'élimination efficace des insectes nuisibles, offrant des solutions durables et respectueuses de l'environnement.
                </div>
                <div style={{padding: `2vh`}}>
                    <b>A Stop Nuisibles IDF</b>, nous comprenons l'importance d'un environnement sain et sans parasites. Notre équipe dévouée travaille avec un engagement inébranlable pour vous débarrasser de tout problème d'insectes, qu'il s'agisse de cafards, de fourmis, de punaises de lit, de guêpes, ou d'autres envahisseurs indésirables.
                </div>
                </ul>
            </div>
            <div></div>
            <img style={{height: '600px'}} src='A propos.png'/>
          </div>
          <div style={{alignContent: 'center', display: 'grid', gridTemplateColumns: '50% 1% 49%', width: '80%', padding: `2vh`}}>
            <img style={{height: '720px', width: '120%', marginLeft: '-75px'}} src='Pourquoi nous choisir.png'/>
            <div></div>
            <div style={{backgroundColor: '#dfe6e775', fontSize: '20px'}}>
                <b style={{paddingLeft: '0%'}}>Pourquoi Nous Choisir ?</b>
                <ul>
                <li style={{padding: `2vh`}}>
                    <b>Expertise Approfondie </b> :<br />Nos techniciens expérimentés sont formés pour identifier et traiter efficacement tous types d'infestations.
                </li>
                <li style={{padding: `2vh`}}>
                  <b>Solutions Respectueuses de l'Environnement </b> :<br/>Nous privilégions des méthodes respectueuses de l'environnement, assurant la sécurité de votre famille et de vos animaux de compagnie
                </li>
                <li style={{padding: `2vh`}}>
                  <b>Personnalisation des Services </b> :<br/>Chaque situation est unique. Nous adaptons nos services pour répondre spécifiquement à vos besoins
                </li>
                <li style={{padding: `2vh`}}>
                  <b>Intervention Rapide </b> : <br />Nous comprenons l'urgence. Notre équipe réagit rapidement pour résoudre vos problèmes de parasites dans les plus brefs délais.
                </li>
                </ul>
            </div>
          </div>
          <div style={{alignContent: 'center', justifyContent:'center', display: 'grid', gridTemplateColumns: '50% 1% 49%', width: '80%', padding: `2vh`}}>
            <div style={{backgroundColor: '#dfe6e775', fontSize: '20px'}}>
                <b style={{paddingLeft: '0%'}}>Nos Services</b>
                <ul>
                <li style={{padding: `2vh`}}>
                    <b>Désinsectisation générale</b> <br />
                </li>
                <li style={{padding: `2vh`}}>
                  <b>Traitement contre les punaises de lit</b>
                </li>
                <li style={{padding: `2vh`}}>
                  <b>Éradication des cafards</b><br/>
                </li>
                <li style={{padding: `2vh`}}>
                  <b>Contrôle des fourmis</b><br />
                </li>
                <li style={{padding: `2vh`}}>
                  <b>Extermination des guêpes et des frelons</b><br />
                </li>
                <li style={{padding: `2vh`}}>
                  <b>Dératisation</b><br />
                </li>
                <li style={{padding: `2vh`}}>
                  <b>Lutte contre les rongeur</b><br />
                </li>
                </ul>
            </div>
            <div></div>
            <img style={{height: '600px', width:'103%'}} src='nos services.png'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;


{/* <h2>Stop Nuisible IDF</h2>
          <li>Société 3D
          </li>
          <li>
            Dératisation
          </li>
          <li>
            Désinsectisation
          </li>
          <li>
            Désinfection
          </li>
          <h1>A propos de nous:</h1>
          <p>Bienvenue chez <b>Stop Nusible IDF</b>, votre partenaire de confiance pour tous vos besoins en mati&egrave;re de d&eacute;sinsectisation. Nous sommes sp&eacute;cialis&eacute;s dans l'&eacute;limination efficace des insectes nuisibles, offrant des solutions durables et respectueuses de l'environnement.</p>

          <p>Notre Engagement : &Agrave; <b>Stop Nusible IDF</b>, nous comprenons l'importance d'un environnement sain et sans parasites. Notre &eacute;quipe d&eacute;vou&eacute;e travaille avec un engagement in&eacute;branlable pour vous d&eacute;barrasser de tout probl&egrave;me d'insectes, qu'il s'agisse de cafards, de fourmis, de punaises de lit, de gu&ecirc;pes, ou d'autres envahisseurs ind&eacute;sirables.</p>

          <p>Pourquoi Nous Choisir ?</p>
          <ul>
          <li>
              <b>Expertise Approfondie </b> : Nos techniciens exp&eacute;riment&eacute;s sont form&eacute;s pour identifier et traiter efficacement tous types d'infestations.
          </li>
          <li>
            <b>Solutions Respectueuses de l'Environnement </b> : Nous privil&eacute;gions des m&eacute;thodes respectueuses de l'environnement, assurant la s&eacute;curit&eacute; de votre famille et de vos animaux de compagnie.<br/>
          </li>
          <li>
            <b>Personnalisation des Services </b> : Chaque situation est unique. Nous adaptons nos services pour r&eacute;pondre sp&eacute;cifiquement &agrave; vos besoins.<br/>
          </li>
          <li>
            <b>Intervention Rapide </b> : Nous comprenons l'urgence. Notre &eacute;quipe r&eacute;agit rapidement pour r&eacute;soudre vos probl&egrave;mes de parasites dans les plus brefs d&eacute;lais.
          </li>
          </ul>

          <p>Nos Services :</p>

          <p>
          <li>D&eacute;sinsectisation g&eacute;n&eacute;rale</li>
          <li>Traitement contre les punaises de lit</li>
          <li>&Eacute;radication des cafards</li>
          <li>Contr&ocirc;le des fourmis.</li>
          <li>Extermination des gu&ecirc;pes et des frelons, ainsi que la dératisation, la lutte contre les rongeurs</li></p>

          <p>Contactez-Nous : N'h&eacute;sitez pas &agrave; nous contacter pour discuter de vos besoins en mati&egrave;re de d&eacute;sinsectisation. Nous sommes l&agrave; pour vous offrir un environnement sain et sans parasites.</p>

          <p>Faites le choix de la tranquillit&eacute; d'esprit avec <b>Stop Nusible IDF</b> !</p> */}