import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router';
import styled from 'styled-components';
import { DEFAULT_SCHOOL_KEY } from 'config';
import RaisedButton from 'material-ui/RaisedButton';
import ViewSchoolsPicker from '../../components/ViewSchoolsPicker';

import {
  getOwnSchools,
} from './actions';
import {
  selectSchools,
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

export class SchoolSelector extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.setDefaultSchool = (schoolID) => {
      window.localStorage.setItem(DEFAULT_SCHOOL_KEY, schoolID);
      window.location.reload();
    };
  }
  componentWillMount() {
    this.props.getOwnSchools();
  }

  render() {
    return (
      <Wrapper className="container">
        <h2>Select school to manage</h2>
        <ViewSchoolsPicker
          schools={this.props.schools}
          setDefaultSchool={this.setDefaultSchool}
        />
        <Link to="/new_school">
          <RaisedButton label="Create new school" fullWidth />
        </Link>
      </Wrapper>
    );
  }
}

SchoolSelector.propTypes = {
  getOwnSchools: PropTypes.func,
  schools: PropTypes.instanceOf(Immutable.List),
};

const mapStateToProps = createStructuredSelector({
  schools: selectSchools(),
});

function mapDispatchToProps(dispatch) {
  return {
    getOwnSchools: () => (dispatch(getOwnSchools())),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolSelector);
