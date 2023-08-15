import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Movie from './Movie';

export default class Movies extends Component {
  render() {
    return (
      <div className='card-wrapper'>
        {this.props.movies.map((item, index) => (
         <Movie key = {index} movieData = {item} /> 
        ))}
      </div>
    );
  }
}


