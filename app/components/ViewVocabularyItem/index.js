/**
*
* ViewVocabularyItem
*
*/

import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import { Card, CardMedia, CardTitle, CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import './styles.scss';

function ViewVocabularyItem({ vocabulary }) {
  return (
    <div className="view-vocabulary-item col-md-3 col-lg-2">
      <Card>
        <CardMedia>
          <img src={vocabulary.get('image')} role="presentation" />
        </CardMedia>
        <CardTitle title={vocabulary.get('word')} subtitle={vocabulary.get('pronunciation')} style={styles.title} />
        <CardActions>
          <IconButton
            iconClassName="material-icons"
            tooltip="Play sound"
          >
            play_circle_outline
          </IconButton>
          <IconButton
            iconClassName="material-icons"
            tooltip="See definition"
          >
            info_outline
          </IconButton>
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            style={styles.buttonMore}
          >
            <MenuItem primaryText="Edit" />
            <MenuItem primaryText="Delete" />
          </IconMenu>
        </CardActions>
      </Card>
    </div>
  );
}

const styles = {
  buttonMore: {
    float: 'right',
    marginRight: 0,
  },
  title: {
    paddingBottom: 0,
  },
};

ViewVocabularyItem.propTypes = {
  vocabulary: PropTypes.instanceOf(Immutable.Map),
};

export default ViewVocabularyItem;
