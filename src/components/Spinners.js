import React from 'react';

const Spinners = () => (
  <div className="container">
    <div className="spinner-grow spinner-grow-sm text-success" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow spinner-grow-sm text-danger" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow spinner-grow-sm text-warning" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow spinner-grow-sm text-info" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <span className="lead"> Loading... </span>
  </div>
);

export default Spinners;
