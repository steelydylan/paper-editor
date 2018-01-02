import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';

import './index.scss';

export default class Paper extends Component {

  constructor(props) {
    super(props);
    this.idx = 0;
    this.refresh = false;
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
      this.idx = index + 1;
      this.refresh = true;
      return;
    }
    actions.updateLine(index, value);
    e.preventDefault();
  }

  componentDidUpdate() {
    const { idx, refresh } = this;
    if (!refresh) {
      return;
    }
    this.refresh = false;
    const editable = this.paper.querySelector(`.paper-editor__editable-${idx}`);
    editable.focus();
  }

  render () {
    const  { lines } = this.props;
    return (
      <div className="paper-editor" ref={(paper) => {this.paper = paper}}>
        {lines.map((line, index) => {
          return (
            <div className="paper-editor__editable-wrap">
              <ContentEditable className={`paper-editor__editable paper-editor__editable-${index}`} html={line.html} onChange={(e) => {this.onChange(e, index)}}/>
            </div>
          );
        })}
      </div>
    );
  }
}