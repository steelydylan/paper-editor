import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';

import './index.scss';

export default class Paper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      idx: 0
    }
  }

  onChange(e, index) {
    const { actions } = this.props;
    let value = e.target.value;
    if (value.indexOf('<br>') !== -1) {
      value = value
        .replace(/<br>/g, '')
        .replace(/<div>/g, '')
        .replace(/<\/div>/g, '');
      actions.updateLine(index, value);
      actions.addNewline(index + 1);
      this.setState({
        idx: index + 1
      });
      return;
    }
    actions.updateLine(index, value);
    e.preventDefault();
  }

  componentDidUpdate() {
    const { idx } = this.state;
    const editable = this.paper.querySelector(`.paper-editor__editable-${idx}`);
    console.log(editable);
    editable.focus();
  }

  render () {
    const  { lines } = this.props;
    return (
      <div className="paper-editor" ref={(paper) => {this.paper = paper}}>
        {lines.map((line, index) => {
          return (<ContentEditable className={`paper-editor__editable paper-editor__editable-${index}`} html={line.html} onChange={(e) => {this.onChange(e, index)}}/>);
        })}
      </div>
    );
  }
}