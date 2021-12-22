import React from 'react';

const ResourceLabel = ({ status }) => {
  return (
    <span className={`tag is-large ml-5 resource-${status}`}>{status}</span>
  );
};

export default ResourceLabel;
