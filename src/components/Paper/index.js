import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';

import Toolbox from '../Toolbox';
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
    if (value) {
      actions.updateLine(index, value);
    } else {
      if (index !== 0) {
        actions.removeLine(index);
      }
    }
    e.preventDefault();
  }

  addNewline(line) {
    const { actions } = this.props;
    actions.addNewline(line);
    this.idx = index + 1;
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

  removeLine(line) {
    const { actions } = this.props;
    if (line !== 0) {
      actions.removeLine(line);
    }
  }

  render () {
    const  { lines, actions } = this.props;
    return (
      <div className="paper-editor" ref={(paper) => {this.paper = paper}}>
        {lines.map((line, index) => {
          return (
            <div className="paper-editor__editable-wrap">
              <Toolbox actions={actions} index={index} active={line.tagName}/>
              {line.mode === 'text' &&
              <div>
                <button onClick={this.removeLine.bind(this, index)} className="paper-editor__remove-btn"><i className="fa fa-remove"></i></button>
                <ContentEditable tagName={line.tagName} className={`paper-editor__editable paper-editor__editable-${index}`} html={line.html} onChange={(e) => {this.onChange(e, index)}}/>
              </div>
              }
              <div className="paper-editor__add-btn-wrap">
                <button onClick={this.addNewline.bind(this, index + 1)} className="paper-editor__add-btn"><i className="fa fa-plus"></i></button>
                {/* <ul>
                  <li></li>
                  <li></li>
                </ul> */}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}