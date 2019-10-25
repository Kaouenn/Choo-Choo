import React from "react";
import "../assets/title.css";

class Title extends React.Component {
  render = () => {
    return (
      <div>
        <div className="title-bloc">
          <h1 className="title-home">
            Réservez vos billets de train et de bus.
            <br />
            En France et en Europe.
          </h1>
          <h3 className="subtitle-home">
            Voyagez avec Trainline, leader indépendant de la vente de billets de
            train et de bus en Europe.
          </h3>
        </div>
      </div>
    );
  };
}

export default Title;
