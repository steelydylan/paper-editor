import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import * as Actions from '../actions';
import Toolbox from '../components/Toolbox';
import TableEditor from '../components/TableEditor';
import Paper from '../components/Paper';

const tools = [<TableEditor/>];
const icons = [<i className="fa fa-table"></i>];

class App extends React.Component {
  render () {
    const { lines, actions } = this.props;
    return (
      <div style={{position:'relative'}}>
        <Paper 
          lines={lines}
          actions={actions}
          toolbox={<Toolbox tools={tools} icons={icons}/>}
        />
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