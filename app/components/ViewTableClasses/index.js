import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';


function ViewTableClasses({ classes }) {
  return (
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Description</TableHeaderColumn>
          <TableHeaderColumn>Course</TableHeaderColumn>
          <TableHeaderColumn />
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {classes.map((classroom) => (
          <TableRow key={classroom.get('id')}>
            <TableRowColumn>
              {classroom.get('id')}
            </TableRowColumn>
            <TableRowColumn>
              {classroom.get('name')}
            </TableRowColumn>
            <TableRowColumn>
              {classroom.get('description')}
            </TableRowColumn>
            <TableRowColumn>
              {classroom.getIn(['course', 'name'])}
            </TableRowColumn>
            <TableRowColumn>
              <RaisedButton label="View" primary />
            </TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

ViewTableClasses.propTypes = {
  classes: PropTypes.instanceOf(Immutable.List),
};

export default ViewTableClasses;
