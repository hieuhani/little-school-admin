import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, formValueSelector, registerField } from 'redux-form/immutable';
import styled from 'styled-components';
import { REQUEST_STATUS } from 'global-constants';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Immutable from 'immutable';
import FieldForm from '../FieldForm';
import StyledFormWrapper from '../StyledFormWrapper';
import ViewBottomToolbar from '../ViewBottomToolbar';
import ButtonFlat from '../ButtonFlat';
import validate from './validate';

class FormAddClass extends React.PureComponent {
  componentWillMount() {
    this.props.dispatch(registerField('FormAddClass', 'course_id', 'Field'));
  }
  render() {
    if (!(this.props.classroom && this.props.editMode)) {
      return null;
    }
    return (
      <form onSubmit={this.props.handleSubmit}>
        <StyledFormWrapper>
          <Field name="name" type="text" component={FieldForm} label="Name *" hintText="Class name" />
          <Field name="description" type="text" component={FieldForm} label="Description" hintText="Class description" multiLine />
          {!this.props.editMode && <SelectField
            value={this.props.courseID}
            onChange={(event, index, value) => this.props.change('course_id', value)}
            floatingLabelText="Course"
            floatingLabelFixed
            hintText="Select class course"
          >
            {this.props.courses.map((course) => (
              <MenuItem key={course.get('id')} value={course.get('id')} primaryText={course.get('name')} />
            ))}
          </SelectField>}
        </StyledFormWrapper>
        <ViewBottomToolbar>
          <ButtonFlat label="Cancel" onClick={this.props.cancelAddClass} />
          <Spacer />
          <ButtonFlat
            label={this.props.editMode ? 'Update class' : 'Add class'}
            highlighted type="submit"
            disabled={this.props.invalid || this.props.status === REQUEST_STATUS.REQUESTING}
          />
        </ViewBottomToolbar>
      </form>
    );
  }
}

const Spacer = styled.span`
  width: 12px;
`;


FormAddClass.propTypes = {
  handleSubmit: PropTypes.func,
  dispatch: PropTypes.func,
  change: PropTypes.func,
  status: PropTypes.number,
  invalid: PropTypes.bool,
  cancelAddClass: PropTypes.func,
  courseID: PropTypes.number,
  courses: PropTypes.instanceOf(Immutable.List),
  classroom: PropTypes.instanceOf(Immutable.Map),
  editMode: PropTypes.bool,
};
const selector = formValueSelector('FormAddClass');
export default connect((state, ownProps) => {
  // can select values individually
  const courseID = selector(state, 'course_id');
  const formState = {
    courseID,
  };
  if (ownProps.editMode && ownProps.classroom && !courseID) {
    formState.courseID = ownProps.classroom.get('course_id');
    formState.initialValues = {
      name: ownProps.classroom.get('name'),
      description: ownProps.classroom.get('description'),
      course_id: ownProps.classroom.get('course_id'),
      id: ownProps.classroom.get('id'),
    };
  }
  return formState;
})(reduxForm({
  form: 'FormAddClass',
  validate,
})(FormAddClass));
