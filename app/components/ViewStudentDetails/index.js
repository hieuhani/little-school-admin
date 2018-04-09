import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import styled from 'styled-components';
import { browserHistory } from 'react-router';
import ViewDialog from '../ViewDialog';
import ViewDialogHeader from '../ViewDialogHeader';
import ViewBottomToolbar from '../ViewBottomToolbar';
import ButtonFlat from '../ButtonFlat';


const Table = styled.table`
  width: 100%;
  margin-bottom: 20px;
`;
const Classes = styled.ul`
  list-style: none;
  padding: 0;
`;
const Classroom = styled.li`
  width: 50%;
  float: left;
  margin-bottom: 10px;
  h5, p {
    margin-bottom: 0;
  }
`;

function ViewStudentDetails({ student, closeModal }) {
  return (
    <ViewDialog header={<ViewDialogHeader title="Student details" />}>
      <h4>Student details</h4>
      <Table>
        <tbody>
          <tr>
            <th>Username</th>
            <td>{student.get('username')}</td>
          </tr>
          <tr>
            <th>First Name</th>
            <td>{student.get('first_name')}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{student.get('last_name')}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{student.get('email')}</td>
          </tr>
          <tr>
            <th>Birthday</th>
            <td>{student.get('birthday')}</td>
          </tr>
        </tbody>
      </Table>
      <h4>Studying classes of this school</h4>
      {student.get('classrooms').size === 0 && <p>This student has not joined any class of this school</p>}
      {student.get('classrooms').size > 0 && <Classes>
        {student.get('classrooms').map((classroom) => (
          <Classroom key={classroom.get('id')}>
            <h5>{classroom.get('name')}</h5>
            <p>{classroom.get('description')}</p>
          </Classroom>
        ))}
      </Classes>}
      <ViewBottomToolbar>
        <ButtonFlat label="Update" onClick={() => browserHistory.push(`/accounts/${student.get('id')}/edit`)} />
        <Spacer />
        <ButtonFlat highlighted label="Close" onClick={closeModal} />
      </ViewBottomToolbar>
    </ViewDialog>
  );
}

const Spacer = styled.span`
  width: 12px;
`;

ViewStudentDetails.propTypes = {
  student: PropTypes.instanceOf(Immutable.Map),
  closeModal: PropTypes.func,
};

export default ViewStudentDetails;
