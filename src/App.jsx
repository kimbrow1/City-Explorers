import React from "react";
import axios from "axios";

const location_IQ_API_KEY = 'pk.7c317e21f05b6efd9a783137cf700eab';

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
    let result = await axios.get(
      `https://us1.locationiq.com/v1/search?key=${location_IQ_API_KEY}&q=${this.state.memphisCityName}&format=json`
    );
    console.log(result);
    this.setState({
      memphisDisplay_Name: result.data[0].display_name, 
      lon: result.data[0].lon, 
      lat: result.data[0].lat 
    });
    console.log(this.state);
  };

  handleChange = (event) => {
    this.setState({
      memphisCityName: event.target.value
    });
  };

  render() {
    return (
      <><form onSubmit={this.handleExplore}>
          City Name:
        
          <label>
            <input type="text" value={this.state.memphisCityName} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </label>
         
        </form>
        
        <h3>{this.state.memphisDisplay_Name}</h3>
        <p>Latitude: {this.state.lat}</p>
        <p>Longitude: {this.state.lon}</p>
        <img src={`https://us1.locationiq.com/v1/search?key=${location_IQ_API_KEY}&q=${this.state.memphisCityName}&format=json`} />

        
      </>
    );
  }
}

export default App;

