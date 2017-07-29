import React from 'react';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { List, ListItem } from 'material-ui/List';

const styles = {
  list: {
    padding: 0,
  },
  listItem: {
    padding: 10,
  },
};

function ViewStudyingClasses({ classrooms }) {
  return (
    <List style={styles.list}>
      {classrooms.map((classroom) => (
        <ListItem
          onTouchTap={() => browserHistory.push(`/classes/${classroom.get('id')}`)}
          innerDivStyle={styles.listItem}
          key={classroom.get('id')}
          primaryText={classroom.get('name')}
          secondaryText={
            <p>
              {classroom.get('description')}
            </p>
          }
        />
      ))}
    </List>
  );
}

ViewStudyingClasses.propTypes = {
  classrooms: PropTypes.instanceOf(Immutable.List),
};

export default ViewStudyingClasses;
