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
import { yellow500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';


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
          <TableRow key={classroom.get('id')} selectable={false}>
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
            <TableRowColumn style={{ padding: 0 }}>
              <Link to={`/classes/${classroom.get('id')}`} style={styles.buttonAction}>
                <RaisedButton label="View" primary />
              </Link>
              <Link to={`/classes/${classroom.get('id')}/edit`} style={styles.buttonAction}>
                <RaisedButton label="Edit" secondary />
              </Link>
              <Link to={`/classes/${classroom.get('id')}/edit`}>
                <RaisedButton label="Duplicate" backgroundColor={yellow500} />
              </Link>
            </TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

const styles = {
  buttonAction: {
    marginRight: 5,
  },
};

ViewTableClasses.propTypes = {
  classes: PropTypes.instanceOf(Immutable.List),
};

export default ViewTableClasses;
