import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class WeatherDay extends Component {
  render() {
    console.log(this.props.weatherData);
    const { date, description } = this.props.weatherData; // Destructuring
    return (
      <Card>
        <Card.Body>
          <Card.Text>{date}</Card.Text>
          <Card.Title>{description}</Card.Title>
        </Card.Body>
      </Card>
    )
  }
}

