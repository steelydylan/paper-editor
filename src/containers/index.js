import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import * as Actions from '../actions';
import Toolbox from '../components/Toolbox';
import TableEditor from '../components/TableEditor';

class App extends React.Component {
  render () {
    return (
      <div>
        <Toolbox tools={[<TableEditor/>]} icons={[<i className="fa fa-table"></i>]}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(Actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);