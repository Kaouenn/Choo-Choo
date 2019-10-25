import React from "react";
import "../assets/form-left.css";

class FormLeft extends React.Component {
  render = () => {
    const {
      renderSelected,
      inputDeparture,
      autoCompleteApiUrl,
      inputArrival
    } = this.props;

    return (
      <div className="form-left">
        <form autoComplete="off">
          <h2>Quel est votre trajet ?</h2>
          <div className="real-input">
            <input
              type="text"
              autoComplete="off"
              spellCheck="false"
              placeholder="Saisissez votre gare de départ..."
              required
              className={
                "input-style input-style-top departure-logo " +
                (renderSelected === true ? "input-select" : "")
              }
              name="inputDeparture"
              value={inputDeparture}
              onChange={async e => {
                this.props.handleInputChange(e);
                const response = await this.props.getApi(
                  autoCompleteApiUrl,
                  e.target.value
                );
                this.props.handleApi(response);
              }}
              onClick={() => {
                this.props.selectedDeparture();
              }}
            ></input>

            {(inputDeparture.length || inputArrival.length) !== 0 ? (
              <button
                id="ember39"
                className="swap-button swap-button--in-between ember-view search__swap"
              >
                <div className="swap-button__equilibrium">
                  <span className="swap-button__label">
                    Échanger les gares de départ et d’arrivée
                  </span>
                </div>
              </button>
            ) : null}

            <input
              type="text"
              autoComplete="off"
              spellCheck="false"
              placeholder="Saisissez votre gare d'arrivée..."
              required
              className={
                "input-style input-style-bottom arrival-logo " +
                (renderSelected === false ? "input-select" : "")
              }
              name="inputArrival"
              value={inputArrival}
              onChange={async e => {
                this.props.handleInputChange(e);
                const response = await this.props.getApi(
                  autoCompleteApiUrl,
                  e.target.value
                );
                this.props.handleApi(response);
              }}
              onClick={() => {
                this.props.selectedArrival();
              }}
            ></input>
          </div>
          <div className="divided"></div>
          <input
            type="text"
            name="departureDate"
            placeholder="Aller"
            required
            className="input-style input-style-top departure-date-logo unclickable"
          ></input>
          <input
            type="text"
            name="arrivalDate"
            placeholder="Retour"
            maxLength="15"
            required
            className="input-style input-style-bottom arrival-date-logo unclickable"
          ></input>
          <div className="divided"></div>
          <div className="people-bloc">
            <input
              className="input-style passenger-style passenger-logo unclickable"
              type="button"
              defaultValue="1 Adulte (26 - 59)"
            />
            <button className="unclickable"> </button>
          </div>
          <div className="divided"></div>
          <div className="bottom-form-left" style={{ background: "white" }}>
            <p className="text-bottom-form">Utiliser un code de réduction</p>
            <button className="button-bottom-form">rechercher</button>
          </div>
        </form>
      </div>
    );
  };
}

export default FormLeft;
