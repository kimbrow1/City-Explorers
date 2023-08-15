import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class WeatherDay extends Component {
  render() {
    const { title } = this.props.weatherData;
    return (
      <Card>
        <Card.Body>
          <Card.Text>{this.props.weatherData.overview}</Card.Text>
          <Card.Title>{this.props.weatherData.title}</Card.Title>
          <Card.Img src={this.props.weatherData.img} alt={"Poster for " + title} />
        </Card.Body>
      </Card>
    )
  }
}

