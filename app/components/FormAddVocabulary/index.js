import React from 'react';
import PropTypes from 'prop-types';
import { REQUEST_STATUS } from 'global-constants';
import styled from 'styled-components';
import ViewBottomToolbar from '../ViewBottomToolbar';
import ButtonFlat from '../ButtonFlat';

class FormAddVocabulary extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <ViewBottomToolbar>
          <ButtonFlat
            label="Cancel"
            onClick={this.props.cancelAddVocabulary}
            disabled={this.props.status === REQUEST_STATUS.REQUESTING}
          />
          <Spacer />
          <ButtonFlat
            label="Add vocabulary"
            highlighted
            type="submit"
            loading={this.props.status === REQUEST_STATUS.REQUESTING}
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

FormAddVocabulary.propTypes = {
  handleSubmit: PropTypes.func,
  status: PropTypes.number,
  cancelAddVocabulary: PropTypes.func,
  invalid: PropTypes.bool,
};

export default FormAddVocabulary;
