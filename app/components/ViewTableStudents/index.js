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
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import IconButton from 'material-ui/IconButton';

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
              <IconButton
                onTouchTap={() => handleRemoveStudent(student.get('id'))}
                disabled={deletingStudent}
              >
                <ActionDeleteForever />
              </IconButton>
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
