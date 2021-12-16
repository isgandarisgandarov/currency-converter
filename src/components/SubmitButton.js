import React from 'react';
import './SubmitButton.css';

const SubmitButton = ({ name, customClickEvent }) => (
  <button type="button" className="blob-btn" onClick={customClickEvent}>
    {name}
    <span className="blob-btn__inner">
      <span className="blob-btn__blobs">
        <span className="blob-btn__blob" />
        <span className="blob-btn__blob" />
        <span className="blob-btn__blob" />
        <span className="blob-btn__blob" />
      </span>
    </span>
  </button>
);

export default SubmitButton;