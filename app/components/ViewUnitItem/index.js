import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import { Link } from 'react-router';


import './styles.scss';

function ViewUnitItem({ unit }) {
  return (
    <div className="view-unit-item col-md-4 col-lg-3">
      <Link to={`/courses/1/units/${unit.get('id')}`}>
        <Card>
          <CardMedia
            overlay={<CardTitle title={unit.get('name')} subtitle={unit.get('description')} />}
          >
            <img src={unit.get('icon')} role="presentation" />
          </CardMedia>
        </Card>
      </Link>
    </div>
  );
}

ViewUnitItem.propTypes = {
  unit: PropTypes.instanceOf(Immutable.Map),
};

export default ViewUnitItem;
