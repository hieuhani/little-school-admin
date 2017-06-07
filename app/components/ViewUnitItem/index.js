import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { Card, CardMedia, CardHeader } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Col } from 'reactstrap';
import { Link } from 'react-router';

function ViewUnitItem({ unit, deleteUnit }) {
  return (
    <Col xs="12" sm="6" md="4" lg="3">
      <Card>
        <Link to={`/courses/1/units/${unit.get('id')}`}>
          <CardMedia>
            <img src={unit.get('cover')} role="presentation" />
          </CardMedia>
        </Link>
        <CardHeader
          title={unit.get('name')}
          subtitle={unit.get('description')}
          avatar={unit.get('icon')}
        >
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            style={styles.buttonMore}
          >
            <MenuItem primaryText="Delete" onTouchTap={deleteUnit} />
          </IconMenu>
        </CardHeader>
      </Card>
    </Col>
  );
}

const styles = {
  buttonMore: {
    zIndex: 1,
    overflow: 'visible',
    top: 0,
    bottom: 0,
    right: 4,
    position: 'absolute',
    width: 48,
    height: 48,
    marginTop: 12,
  },
};

ViewUnitItem.propTypes = {
  unit: PropTypes.instanceOf(Immutable.Map),
  deleteUnit: PropTypes.func.isRequired,
};

export default ViewUnitItem;
