import React, { Component } from 'react';
import './index.scss';

export default class Toolbox extends Component {

  render () {
    return (
    <div>
      <button className="paper-toolbox__btn">
        <span className="paper-toolbox__btn-line"></span>
        <span className="paper-toolbox__btn-line"></span>
      </button>
      <ul></ul>
    </div>);
  }
}