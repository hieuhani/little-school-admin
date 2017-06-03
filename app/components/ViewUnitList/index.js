import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import ViewUnitItem from '../ViewUnitItem';

function ViewUnitList({ units }) {
  return (
    <div className="view-unit-list row">
      {units.map((unit) => (
        <ViewUnitItem key={unit.get('id')} unit={unit} />
      ))}
    </div>
  );
}

ViewUnitList.propTypes = {
  units: PropTypes.instanceOf(Immutable.List),
};

export default ViewUnitList;
