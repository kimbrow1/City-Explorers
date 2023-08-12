




import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class Weather extends Component {
  render() {
    return (
      <div>
        {this.props.weatherData.map((item, index) => (
          <Card key={index}>
            <Card.Body>
              <Card.Title>{item.date}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}


