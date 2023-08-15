import React from "react";
import axios from "axios";
import { Alert } from "react-bootstrap"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./Weather";
import Movies from "./Movies";
import WeatherDay from "./WeatherDay";


const location_IQ_API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

const url = import.meta.env.VITE_BACKENDURL || "http://localhost:3001/"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      memphisDisplay_Name: '',
      lon: '',
      lat: '',
      memphisCityName: '',
      error: null,
      weatherData:[],
      moviesData: [],
    };
  }

  handleExplore = async (event) => {
    event.preventDefault();
    this.setState({error:null})
    try {
      let result = await axios.get(
        `https://us1.locationiq.com/v1/search?key=${location_IQ_API_KEY}&q=${this.state.memphisCityName}&format=json`
      );

      this.setState({
        memphisDisplay_Name: result.data[0].display_name,
        lon: result.data[0].lon,
        lat: result.data[0].lat,
        error: null, 
      }, async () => {
        try {
          const weatherData = await axios.get(`${url}weather?lat=${this.state.lat}&lon=${this.state.lon}`);
          this.setState({weatherData:weatherData.data}, () => console.log(this.state.weatherData)) // this a trick 
        } catch (e) {
          console.log(e);
          this.setState({error:e.message})
        }

      });
    } catch (error) {
      console.error("Error getting location data:", error)
      // this.setState({error:error.message})
      ;

      if (error.response) {
        const { status, data } = error.response;
        this.setState({
          error: `Error: ${status} - ${data.error}`,
        });
      } else {
        this.setState({ error: "Error getting location data. Please try again." });
      }
    }

    try {
      const moviesData = await axios.get(`${url}movies?cityName=${this.state.memphisCityName}`);
      this.setState({moviesData:moviesData.data}, () => console.log(this.state.moviesData) // this a trick 
    )} catch (e) {
      this.setState({error:e.message})
       console.log(e);
    }
  };

  handleChange = (event) => {
    this.setState({
      memphisCityName: event.target.value,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleExplore}>
          City Name:
          <label>
            <input
              type="text"
              value={this.state.memphisCityName}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" />
          </label>
        </form>
        {console.log(this.state.error)}
        {this.state.error && (
          <Alert variant="danger">{this.state.error}</Alert>
        )}
        <h3>{this.state.memphisDisplay_Name}</h3>
        <p>Latitude: {this.state.lat}</p>
        <p>Longitude: {this.state.lon}</p>
        {this.state.lat !== '' && this.state.lon !== '' && (
          <img
            src={`https://maps.locationiq.com/v3/staticmap?key=${location_IQ_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=12&size=400x400&format=png&maptype=map`}
            alt="Map"
          />
        )} 
        <Weather weatherData = {this.state.weatherData}/>
        <Movies movies = {this.state.moviesData} />
      </> 
    );
  }
}
export default App;


