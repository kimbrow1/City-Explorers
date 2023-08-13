import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class Movie extends Component {
  render() {
    return (
      <div className='card-wrapper'>
        {this.props.movies.map((item, index) => (
          <Card key={index}>
            <Card.Body>
              <Card.Text>{item.overview}</Card.Text>
              <Card.Title>{item.title}</Card.Title>
              <Card.Img src={item.img} alt={"Poster for  " + item.title}/>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}


