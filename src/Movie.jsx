import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Movie extends Component {
  render() {
    const { title } = this.props.movieData;
    return (
      <Card>
        <Card.Body>
          <Card.Text>{this.props.movieData.overview}</Card.Text>
          <Card.Title>{this.props.movieData.title}</Card.Title>
          <Card.Img src={this.props.movieData.img} alt={"Poster for  " + title}
          />
        </Card.Body>
      </Card>
    );
  }
}
