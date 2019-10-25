import React from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import FormLeft from "./components/FormLeft";
import Informations from "./components/Informations";
import FormResult from "./components/FormResult";
import ReactDOM from "react-dom";
import axios from "axios";
import "./assets/index.css";

class App extends React.Component {
  state = {
    inputDeparture: "",
    inputArrival: "",
    citysApi: null,
    renderSelected: null,
    isItClicked: false
  };

  handleApi = response => {
    let { citysApi } = this.state;
    citysApi = response;
    this.setState({ citysApi });
  };

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };

  selectedDeparture = () => {
    this.setState({ renderSelected: true });
  };
  selectedArrival = () => {
    this.setState({ renderSelected: false });
  };

  setClickedInput = async cityName => {
    if (this.state.renderSelected === true) {
      await this.setState({
        inputDeparture: cityName,
        renderSelected: !this.state.renderSelected,
        isItClicked: true
      });

      await this.componentDidMount();
    } else if (this.state.renderSelected === false) {
      await this.setState({
        inputArrival: cityName,
        renderSelected: !this.state.renderSelected,
        isItClicked: true
      });
      await this.componentDidMount();
    }
  };
  render = () => {
    const {
      renderSelected,
      inputDeparture,
      inputArrival,
      citysApi
    } = this.state;

    const ComponentsCommonProps = {
      renderSelected: renderSelected,
      selectedDeparture: this.selectedDeparture,
      selectedArrival: this.selectedArrival,
      handleInputChange: this.handleInputChange,
      inputDeparture: inputDeparture,
      inputArrival: inputArrival,
      citysApi: citysApi,
      getApi: this.getData,
      autoCompleteApiUrl: "https://api.comparatrip.eu/cities/autocomplete/?q=",
      handleApi: this.handleApi,
      setClickedInput: this.setClickedInput
    };

    return (
      <div className="App">
        <Header />
        <Title />
        <div className="all-forms">
          <FormLeft {...ComponentsCommonProps} />
          {this.state.renderSelected === null ? (
            <Informations />
          ) : (
            <FormResult {...ComponentsCommonProps} />
          )}
        </div>
      </div>
    );
  };

  getData = async (autoCompleteApiUrl, value) => {
    const param = value ? value : "";
    const response = await axios.get(autoCompleteApiUrl + param);
    return response.data;
  };

  componentDidMount = async () => {
    if (this.state.isItClicked === true) {
      if (this.state.renderSelected === true) {
        console.log("log inputdeparture");

        const citysApi = await this.getData(
          "https://api.comparatrip.eu/cities/popular/from/" +
            this.state.inputArrival +
            "/7"
        );
        this.setState({ citysApi });
      } else if (this.state.renderSelected === false) {
        console.log("log inputArrival");
        const citysApi = await this.getData(
          "https://api.comparatrip.eu/cities/popular/from/" +
            this.state.inputDeparture +
            "/7"
        );
        this.setState({ citysApi });
      }
    } else {
      const citysApi = await this.getData(
        "https://api.comparatrip.eu/cities/popular/7"
      );
      this.setState({ citysApi });
    }
  };
}

ReactDOM.render(<App />, document.getElementById("root"));
