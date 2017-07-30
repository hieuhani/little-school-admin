import React from 'react';
import { List, ListItem } from 'material-ui/List';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

function ViewSchoolsPicker({ schools, setDefaultSchool }) {
  return (
    <List>
      {schools.map((school) => (
        <ListItem
          onTouchTap={() => setDefaultSchool(school.get('id'))}
          key={school.get('id')}
          primaryText={school.get('name')}
          secondaryText={school.get('address')}
        />
      ))}
    </List>
  );
}

ViewSchoolsPicker.propTypes = {
  schools: PropTypes.instanceOf(Immutable.List),
  setDefaultSchool: PropTypes.func,
};

export default ViewSchoolsPicker;
