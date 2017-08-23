import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import _ from 'lodash';

const styles = {
  dropZone: {
    width: '100%',
    border: '2px dashed #999',
    padding: 10,
    cursor: 'pointer',
  },
};

function FormImportCsv({ handleFileDropped, file }) {
  return (
    <div className="form-import-csv">
      <Dropzone accept="text/csv, .csv" multiple={false} onDrop={(files) => handleFileDropped(_.head(files))} style={styles.dropZone}>
        {!file && <span className="text">Select or drag CSV file</span>}
        {file && <span>{file.name}</span>}
      </Dropzone>
    </div>
  );
}

FormImportCsv.propTypes = {
  handleFileDropped: PropTypes.func,
  file: PropTypes.object,
};

export default FormImportCsv;
