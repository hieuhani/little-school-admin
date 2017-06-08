import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import ViewDialog from '../../components/ViewDialog';
import ViewDialogHeader from '../../components/ViewDialogHeader';
import FormAddVocabulary from '../../components/FormAddVocabulary';

export class VocabulariesAdd extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.closeForm = () => {
      browserHistory.push(`/courses/${this.props.params.courseId}/units/${this.props.params.unitId}`);
    };
  }

  render() {
    return (
      <ViewDialog header={<ViewDialogHeader title="Add new vocabulary" />}>
        <FormAddVocabulary
          cancelAddVocabulary={this.closeForm}
        />
      </ViewDialog>
    );
  }
}

VocabulariesAdd.propTypes = {
  params: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VocabulariesAdd);
