
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import WeatherDay from "./WeatherDay";


export default class Weather extends Component {
  render() {
    return (
      <div className="card-wrapper">
        {this.props.weatherData.map((item, index) => (
          <WeatherDay key={index} weatherData={item} />
        ))}
      </div>
    );
  }
}
