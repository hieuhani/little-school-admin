import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import ViewUnitItem from '../ViewUnitItem';

function ViewUnitList({ units, deleteUnit }) {
  return (
    <div className="view-unit-list row">
      {units.map((unit) => (
        <ViewUnitItem key={unit.get('id')} unit={unit} deleteUnit={() => deleteUnit(unit.get('id'))} />
      ))}
    </div>
  );
}

ViewUnitList.propTypes = {
  units: PropTypes.instanceOf(Immutable.List),
  deleteUnit: PropTypes.func.isRequired,
};

export default ViewUnitList;
