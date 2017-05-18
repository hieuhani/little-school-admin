import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import ViewVocabularyItem from '../ViewVocabularyItem';
import './styles.scss';

function ViewVocabularyList({ vocabularies }) {
  return (
    <div className="view-vocabulary-list row">
      {vocabularies.map((vocabulary) => (
        <ViewVocabularyItem key={vocabulary.get('id')} vocabulary={vocabulary} />
      ))}
    </div>
  );
}

ViewVocabularyList.propTypes = {
  vocabularies: PropTypes.instanceOf(Immutable.List).isRequired,
};

export default ViewVocabularyList;
