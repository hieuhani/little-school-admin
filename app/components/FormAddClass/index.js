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
    return (
      <form onSubmit={this.props.handleSubmit}>
        <StyledFormWrapper>
          <Field name="name" type="text" component={FieldForm} label="Name *" hintText="Class name" />
          <Field name="description" type="text" component={FieldForm} label="Description" hintText="Class description" multiLine />
          <SelectField
            value={this.props.courseID}
            onChange={(event, index, value) => this.props.change('course_id', value)}
            floatingLabelText="Course"
            floatingLabelFixed
            hintText="Select class course"
          >
            {this.props.courses.map((course) => (
              <MenuItem key={course.get('id')} value={course.get('id')} primaryText={course.get('name')} />
            ))}
          </SelectField>
        </StyledFormWrapper>
        <ViewBottomToolbar>
          <ButtonFlat label="Cancel" onClick={this.props.cancelAddClass} />
          <Spacer />
          <ButtonFlat label="Add class" highlighted type="submit" disabled={this.props.invalid || this.props.status === REQUEST_STATUS.REQUESTING} />
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
};
const selector = formValueSelector('FormAddClass');
export default connect((state) => {
  // can select values individually
  const courseID = selector(state, 'course_id');
  return {
    courseID,
  };
})(reduxForm({
  form: 'FormAddClass',
  validate,
})(FormAddClass));
