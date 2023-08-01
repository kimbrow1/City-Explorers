import React from "react";
import axios from "axios";

const location_IQ_API_KEY = 'pk.0e9d5abc918fcd0f95c088680a0b6547';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      memphisDisplay_Name: '',
      lon: '',
      lat: '',
      memphisCityName: ''
    };
  }

  handleExplore = async (event) => {
    event.preventDefault();
    try {
      let result = await axios.get(
        `https://us1.locationiq.com/v1/search?key=${location_IQ_API_KEY}&q=${this.state.memphisCityName}&format=json`
      );

      this.setState({
        memphisDisplay_Name: result.data[0].display_name,
        lon: result.data[0].lon,
        lat: result.data[0].lat
      });
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  handleChange = (event) => {
    this.setState({
      memphisCityName: event.target.value
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleExplore}>
          City Name:
          <label>
            <input type="text" value={this.state.memphisCityName} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </label>
        </form>

        <h3>{this.state.memphisDisplay_Name}</h3>
        <p>Latitude: {this.state.lat}</p>
        <p>Longitude: {this.state.lon}</p>

        {this.state.lat !== '' && this.state.lon !== '' && (
          <img
            src={`https://maps.locationiq.com/v3/staticmap?key=${location_IQ_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=12&size=400x400&format=png&maptype=map`}
            alt="Map"
          />
        )}
      </>
    );
  }
}

export default App;


