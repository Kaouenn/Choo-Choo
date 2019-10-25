import React from "react";
import "../assets/information.css";

class Informations extends React.Component {
  render = () => {
    return (
      <div className="forms-right">
        <div className="infos-header">
          <h3>Les petits plus de Trainline</h3>
        </div>
        <div className="landing-panel__content">
          <ul className="landing-panel__list">
            <li className="landing-panel__list-item">
              <span className="icon--price" />
              <div>
                <b>Vos billets au meilleur prix</b>
                <br /> Achetez vos billets aux prix fixés par les transporteurs,
                sans frais supplémentaires.
              </div>
            </li>
            <li className="landing-panel__list-item">
              <span className="icon--loyalty-card" />
              <div>
                <b>Cartes de réduction</b>
                <br /> Elles sont toutes acceptées, comme vos cartes de
                fidélité.
              </div>
            </li>
            <li className="landing-panel__list-item">
              <span className="icon--payment" />
              <div>
                <b>Payez en toute sécurité</b>
                <br /> CB, Amex, PayPal&nbsp;: c’est vous qui voyez.
              </div>
            </li>
          </ul>
          <div className="hr"></div>
          <div className="landing-panel__app-download">
            <p className="landing-panel__app-download-title">
              L’app leader pour voyager en train et en bus en Europe
            </p>
            <div className="landing-panel__app-download-badges">
              <img
                src="https://assets.trainline.eu/assets/images/open-home/fr/app_store-982918c20bc831835da249d342f31bbd.svg"
                alt="Télécharger dans l’App Store"
                className="app-img"
              />

              <img
                src="https://assets.trainline.eu/assets/images/open-home/fr/google_play-5397aa8a86e85cf8920c5580245fd572.svg"
                alt="Disponible sur Google Play"
                className="app-img"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Informations;
