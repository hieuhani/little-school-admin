/**
*
* ViewUnitDetail
*
*/

import React from 'react';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { white, green500, grey800 } from 'material-ui/styles/colors';
import Immutable from 'immutable';
import ViewVocabularyList from '../ViewVocabularyList';
import './styles.scss';

const unit = Immutable.fromJS({
  id: 3,
  name: 'Animals',
  description: 'Colours of the life',
  icon: 'https://image.freepik.com/free-vector/hand-drawn-happy-children-s-day-card_23-2147526572.jpg',
  cover: 'http://www.contactnumbers.co.in/wp-content/uploads/2013/11/Happy-childrens-day-cards-2013.jpg',
});

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

function ViewUnitDetail() {
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
                <RaisedButton
                  href="https://github.com/callemall/material-ui"
                  target="_blank"
                  label="Add a new vocabulary"
                  icon={<FontIcon className="material-icons" color={white}>add</FontIcon>}
                  style={{ float: 'right' }}
                  backgroundColor={green500}
                  labelColor={white}
                />
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

};

export default ViewUnitDetail;
