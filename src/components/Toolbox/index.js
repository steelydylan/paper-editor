import React, { Component } from 'react';
import classnames from 'classnames';

import './index.scss';

export default class Toolbox extends Component {

  constructor (props) {
    super(props);
    this.state = {
      open: false
    }
  }

  toggleList () {
    const { open } = this.state;
    this.setState({
      open: !open
    });
  }

  render () {
    const { open } = this.state;
    const { tools } = this.props;

    return (
    <div>
      <button className={classnames("paper-toolbox__btn", {active: open})} onClick={this.toggleList.bind(this)}>
        <span className="paper-toolbox__btn-line"></span>
        <span className="paper-toolbox__btn-line"></span>
      </button>
      {open &&
        <ul>
        
        </ul>
      }
      {open &&
        <div>
          {tools.map(tool => tool)}
        </div>
      }
    </div>);
  }
}