import React, { Component } from 'react';
import './index.scss';

export default class Paper extends Component {

  onKeyDown(e) {
    if (e.keyCode !== 13) {
      return true;
    }
    const { actions } = this.props;
    actions.addNewline();
    e.preventDefault();
  }

  render () {
    const  { lines } = this.props;
    return (
      <div className="paper-editor">
        {lines.map(line => {
          return (<div className="paper-editor__editable" contentEditable></div>);
        })}
        <div className="paper-editor__editable" contentEditable onKeyDown={this.onKeyDown.bind(this)}></div>
      </div>
    );
  }
}