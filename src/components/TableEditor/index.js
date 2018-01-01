import React, { Component } from 'react';
import ATable from 'a-table';
import 'a-table/css/a-table.css';

export default class TableEditor extends Component {
  componentDidMount() {
    this.aTable = new ATable(this.table.querySelector('table'));
  }

  render () {
    return (
      <div ref={(table) => {this.table = table}}>
        <table>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    );
  }
}