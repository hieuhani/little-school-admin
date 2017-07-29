import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';

const PaginationWrapper = styled.div`
  margin-top: 15px;
  margin-left: 20px;
`;

const styles = {
  paginationButton: {
    minWidth: 40,
    marginRight: 5,
  },
};

function ViewPagination({ count, size, currentPage, handleSelectPage }) {
  if (count === 0) return null;
  const totalPage = Math.ceil(count / size);
  return (
    <PaginationWrapper>
      {_.map(_.times(totalPage), (page) => (
        <RaisedButton
          label={page + 1}
          key={page}
          secondary={currentPage === (page + 1)} style={styles.paginationButton}
          onTouchTap={() => handleSelectPage(page + 1)}
        />
      ))}
    </PaginationWrapper>
  );
}

ViewPagination.propTypes = {
  currentPage: PropTypes.number,
  size: PropTypes.number,
  count: PropTypes.number,
  handleSelectPage: PropTypes.func,
};

export default ViewPagination;
