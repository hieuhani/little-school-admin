import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import FormAddSchool from '../../components/FormAddSchool';
import {
  createSchool,
} from './actions';
import {
  selectLoading,
  selectSchool,
} from './selectors';

const Wrapper = styled.div`
  max-width: 30rem;
  background: #FFF;
  border-radius: 10px;
  margin-top: 40px;
  padding: 30px 20px;

  h2 {
    font-size: 1.3rem;
    color: #666;
    text-align: center;
  }
`;

export class SchoolsAdd extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps(nextProps) {
    if (nextProps.school && this.props.school === null) {
      browserHistory.push('/');
      window.location.reload();
    }
  }

  render() {
    return (
      <Wrapper className="container">
        <h2>Create new school</h2>
        <FormAddSchool
          onSubmit={this.props.createSchool}
          loading={this.props.loading}
        />
      </Wrapper>
    );
  }
}

SchoolsAdd.propTypes = {
  createSchool: PropTypes.func,
  loading: PropTypes.bool,
  school: PropTypes.instanceOf(Immutable.Map),
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading(),
  school: selectSchool(),
});

function mapDispatchToProps(dispatch) {
  return {
    createSchool: (values) => (dispatch(createSchool(values))),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolsAdd);
