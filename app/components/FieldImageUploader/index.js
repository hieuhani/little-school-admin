import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import FontIcon from 'material-ui/FontIcon';

import _ from 'lodash';

const ImageUploader = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
    pointer-events: none;
    user-select: none;
    color: rgba(0, 0, 0, 0.3);
    transform: scale(0.75);
    transform-origin: left top 0px;
`;

const PreviewImage = styled.img`
  max-width: 100%;
`;

const ImagePlaceholder = styled.div`
  padding: 15px 15px 10px;
  .text {
    float: left;
  }
`;

const styles = {
  dropzone: {
    border: '2px dashed #CCC',
    cursor: 'pointer',
  },
  imageIcon: {
    color: 'rgba(0, 0, 0, 0.6)',
  },
};

function FieldImageUploader({ label, handleFileDropped, file }) {
  return (
    <ImageUploader>
      <Label>{label}</Label>
      <Dropzone accept="image/*" multiple={false} onDrop={(files) => handleFileDropped(_.head(files))} style={styles.dropzone}>
        {!file && <ImagePlaceholder>
          <FontIcon className="material-icons" style={styles.imageIcon}>image</FontIcon>
          <span className="text">Select or drag image</span>
        </ImagePlaceholder>}
        {file && <PreviewImage src={file.preview} />}
      </Dropzone>
    </ImageUploader>
  );
}

FieldImageUploader.propTypes = {
  label: PropTypes.string.isRequired,
  handleFileDropped: PropTypes.func.isRequired,
  file: PropTypes.instanceOf(File),
};

export default FieldImageUploader;
