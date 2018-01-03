import React, { Component } from 'react';
import classnames from 'classnames';

import './index.scss';

export default class Toolbox extends Component {

  constructor (props) {
    super(props);
    this.state = {
      open: false,
      icons: [{
          'label': 'p',
          'value': 'p'
        }, {
          'label': 'h1',
          'value': 'h1'
        }, {
          'label': 'h2',
          'value': 'h2'
        }, {
          'label': 'h3',
          'value': 'h3'
        }, {
          'label': 'h4',
          'value': 'h4'
        }, {
          'label': <i className="fa fa-table"></i>,
          'value': 'table'
        }]
    }
  }

  toggleList () {
    const { open } = this.state;
    this.setState({
      open: !open
    });
  }

  render () {
    const { open, icons } = this.state;
    const { tools } = this.props;

    return (
    <div className={classnames("paper-toolbox-wrap", {active: open})}>
      <button className={classnames("paper-toolbox__btn", {active: open})} onClick={this.toggleList.bind(this)}>
        <span className="paper-toolbox__btn-line"></span>
        <span className="paper-toolbox__btn-line"></span>
      </button>
      {open &&
        <ul className="paper-toolbox">
          {icons.map(icon => <li>{icon.label}</li>)}
        </ul>
      }
    </div>);
  }
}