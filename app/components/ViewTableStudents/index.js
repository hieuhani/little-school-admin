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

function ViewTableStudents({ students, handleRemoveStudent, deletingStudent }) {
  return (
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Username</TableHeaderColumn>
          <TableHeaderColumn>First Name</TableHeaderColumn>
          <TableHeaderColumn>Last Name</TableHeaderColumn>
          <TableHeaderColumn>Email</TableHeaderColumn>
          <TableHeaderColumn />
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {students.map((student) => (
          <TableRow key={student.get('id')} selectable={false}>
            <TableRowColumn>
              {student.get('id')}
            </TableRowColumn>
            <TableRowColumn>
              {student.get('username')}
            </TableRowColumn>
            <TableRowColumn>
              {student.get('first_name')}
            </TableRowColumn>
            <TableRowColumn>
              {student.get('last_name')}
            </TableRowColumn>
            <TableRowColumn>
              {student.get('email')}
            </TableRowColumn>
            <TableRowColumn>
              <RaisedButton
                label="Remove"
                secondary
                onTouchTap={() => handleRemoveStudent(student.get('id'))}
                disabled={deletingStudent}
              />
            </TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

ViewTableStudents.propTypes = {
  students: PropTypes.instanceOf(Immutable.List),
  handleRemoveStudent: PropTypes.func,
  deletingStudent: PropTypes.bool,
};

export default ViewTableStudents;
