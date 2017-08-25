import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { REQUEST_STATUS } from 'global-constants';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import ActionVisibility from 'material-ui/svg-icons/action/visibility';
import ActionContentCopy from 'material-ui/svg-icons/content/content-copy';
import ActionCreate from 'material-ui/svg-icons/content/create';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router';


function ViewTableClasses({ classes, handleDeleteClass, deleteClassStatus }) {
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
                <IconButton>
                  <ActionVisibility />
                </IconButton>
              </Link>
              <Link to={`/classes/${classroom.get('id')}/edit`} style={styles.buttonAction}>
                <IconButton>
                  <ActionCreate />
                </IconButton>
              </Link>
              <Link to={`/classes/${classroom.get('id')}/duplicate`}>
                <IconButton>
                  <ActionContentCopy />
                </IconButton>
              </Link>
              <IconButton
                onClick={() => handleDeleteClass(classroom.get('id'))}
                disabled={deleteClassStatus === REQUEST_STATUS.REQUESTING}
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

const styles = {
  buttonAction: {
    marginRight: 5,
  },
};

ViewTableClasses.propTypes = {
  classes: PropTypes.instanceOf(Immutable.List),
  handleDeleteClass: PropTypes.func,
  deleteClassStatus: PropTypes.number,
};

export default ViewTableClasses;
