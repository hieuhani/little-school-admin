import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { white, green500, grey800 } from 'material-ui/styles/colors';
import Immutable from 'immutable';
import { Link } from 'react-router';
import ViewVocabularyList from '../ViewVocabularyList';
import './styles.scss';

const vocabularies = Immutable.fromJS([
  {
    id: 1,
    word: 'dictionary',
    pronunciation: 'dik-shuh-ner-ee',
    definition: 'A book giving information on particular subjects or on a particular class of words, names, or facts, usually arranged alphabetically',
    sound: 'http://www.sample-videos.com/audio/mp3/crowd-cheering.mp3',
    image: 'https://image.freepik.com/free-vector/book-illustrations-pack_23-2147500415.jpg',
  },
  {
    id: 2,
    word: 'dictionary',
    pronunciation: 'dik-shuh-ner-ee',
    definition: 'A book giving information on particular subjects or on a particular class of words, names, or facts, usually arranged alphabetically',
    sound: 'http://www.sample-videos.com/audio/mp3/crowd-cheering.mp3',
    image: 'https://image.freepik.com/free-vector/book-illustrations-pack_23-2147500415.jpg',
  },
  {
    id: 3,
    word: 'dictionary',
    pronunciation: 'dik-shuh-ner-ee',
    definition: 'A book giving information on particular subjects or on a particular class of words, names, or facts, usually arranged alphabetically',
    sound: 'http://www.sample-videos.com/audio/mp3/crowd-cheering.mp3',
    image: 'https://image.freepik.com/free-vector/book-illustrations-pack_23-2147500415.jpg',
  },
  {
    id: 4,
    word: 'dictionary',
    pronunciation: 'dik-shuh-ner-ee',
    definition: 'A book giving information on particular subjects or on a particular class of words, names, or facts, usually arranged alphabetically',
    sound: 'http://www.sample-videos.com/audio/mp3/crowd-cheering.mp3',
    image: 'https://image.freepik.com/free-vector/book-illustrations-pack_23-2147500415.jpg',
  },
  {
    id: 5,
    word: 'dictionary',
    pronunciation: 'dik-shuh-ner-ee',
    definition: 'A book giving information on particular subjects or on a particular class of words, names, or facts, usually arranged alphabetically',
    sound: 'http://www.sample-videos.com/audio/mp3/crowd-cheering.mp3',
    image: 'https://image.freepik.com/free-vector/book-illustrations-pack_23-2147500415.jpg',
  },
  {
    id: 6,
    word: 'dictionary',
    pronunciation: 'dik-shuh-ner-ee',
    definition: 'A book giving information on particular subjects or on a particular class of words, names, or facts, usually arranged alphabetically',
    sound: 'http://www.sample-videos.com/audio/mp3/crowd-cheering.mp3',
    image: 'https://image.freepik.com/free-vector/book-illustrations-pack_23-2147500415.jpg',
  },
  {
    id: 7,
    word: 'dictionary',
    pronunciation: 'dik-shuh-ner-ee',
    definition: 'A book giving information on particular subjects or on a particular class of words, names, or facts, usually arranged alphabetically',
    sound: 'http://www.sample-videos.com/audio/mp3/crowd-cheering.mp3',
    image: 'https://image.freepik.com/free-vector/book-illustrations-pack_23-2147500415.jpg',
  },
]);

function ViewUnitDetail({ unit, courseID }) {
  return (
    <div className="view-unit-detail">
      <div className="row">
        <div className="col">
          <Card style={styles.coverWrapper}>
            <div style={styles.cover(unit.get('cover'))} />
            <div className="unit">
              <div className="icon">
                <img src={unit.get('icon')} role="presentation" className="rounded" />
              </div>
              <div className="info">
                <h3 className="name" style={styles.unitName}>{unit.get('name')}</h3>
                <span>{unit.get('description')}</span>
              </div>
              <div className="actions">
                <Link to={`/courses/${courseID}/units/${unit.get('id')}/vocabularies/add`}>
                  <RaisedButton
                    label="Add vocabulary"
                    icon={<FontIcon className="material-icons" color={white}>add</FontIcon>}
                    style={{ float: 'right' }}
                    backgroundColor={green500}
                    labelColor={white}
                  />
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <ViewVocabularyList vocabularies={vocabularies} />
    </div>
  );
}

const styles = {
  coverWrapper: {
    position: 'relative',
    paddingBottom: '100px',
  },
  cover: (coverImage) => ({
    backgroundImage: `url(${coverImage})`,
    height: '400px',
  }),
  unitName: {
    color: grey800,
  },
};

ViewUnitDetail.propTypes = {
  unit: PropTypes.instanceOf(Immutable.Map),
  courseID: PropTypes.number,
};

export default ViewUnitDetail;
