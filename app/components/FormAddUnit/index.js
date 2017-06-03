import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { REQUEST_STATUS } from 'global-constants';
import FieldForm from '../FieldForm';
import FieldImageUploader from '../FieldImageUploader';
import StyledFormWrapper from '../StyledFormWrapper';
import ViewBottomToolbar from '../ViewBottomToolbar';
import ButtonFlat from '../ButtonFlat';
import validate from './validate';

class FormAddUnit extends React.PureComponent {
  componentWillUnmount() {
    this.revokeObjectURL(this.props.iconFile);
    this.revokeObjectURL(this.props.coverFile);
  }

  revokeObjectURL(file) {
    if (file && file instanceof File) {
      window.URL.revokeObjectURL(file.preview);
    }
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <StyledFormWrapper>
          <Field name="name" type="text" component={FieldForm} label="Name" hintText="Unit name" />
          <Field name="description" type="text" component={FieldForm} label="Description" hintText="Unit description" multiLine />
          <Field
            name="icon"
            component={FieldImageUploader}
            label="Icon"
            handleFileDropped={(file) => this.props.change('iconFile', file)}
            file={this.props.iconFile}
          />
          <Field
            name="cover"
            component={FieldImageUploader}
            label="Cover"
            handleFileDropped={(file) => this.props.change('coverFile', file)}
            file={this.props.coverFile}
          />
        </StyledFormWrapper>
        <ViewBottomToolbar>
          <ButtonFlat label="Cancel" onClick={this.props.cancelAddUnit} />
          <Spacer />
          <ButtonFlat label="Add unit" highlighted type="submit" disabled={this.props.invalid || !this.props.iconFile || !this.props.coverFile || this.props.status === REQUEST_STATUS.REQUESTING} />
        </ViewBottomToolbar>
      </form>
    );
  }
}

const Spacer = styled.span`
  width: 12px;
`;

FormAddUnit.propTypes = {
  handleSubmit: PropTypes.func,
  status: PropTypes.number,
  cancelAddUnit: PropTypes.func,
  change: PropTypes.func,
  invalid: PropTypes.bool,
  iconFile: PropTypes.instanceOf(File),
  coverFile: PropTypes.instanceOf(File),
};

FormAddUnit = reduxForm({ // eslint-disable-line no-class-assign
  form: 'FormAddUnit',
  validate,
})(FormAddUnit);

const selector = formValueSelector('FormAddUnit');
FormAddUnit = connect((state) => { // eslint-disable-line no-class-assign
  const { iconFile, coverFile } = selector(state, 'iconFile', 'coverFile');
  return {
    iconFile,
    coverFile,
  };
})(FormAddUnit);

export default FormAddUnit;
