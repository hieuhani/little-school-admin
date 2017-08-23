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
    <Table className="view-table-students">
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Username</TableHeaderColumn>
          <TableHeaderColumn>Full Name</TableHeaderColumn>
          <TableHeaderColumn>Phone</TableHeaderColumn>
          <TableHeaderColumn>Email</TableHeaderColumn>
          <TableHeaderColumn>Parent Name</TableHeaderColumn>
          <TableHeaderColumn>Class Description</TableHeaderColumn>
          <TableHeaderColumn />
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {students.map((student) => (
          <TableRow key={student.get('id')} selectable={false}>
            <TableRowColumn>
              {student.get('username')}
            </TableRowColumn>
            <TableRowColumn>
              {student.get('full_name')}
            </TableRowColumn>
            <TableRowColumn>
              {student.get('phone')}
            </TableRowColumn>
            <TableRowColumn>
              {student.get('email')}
            </TableRowColumn>
            <TableRowColumn>
              {student.get('parent_name')}
            </TableRowColumn>
            <TableRowColumn>
              {student.get('class_text')}
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
