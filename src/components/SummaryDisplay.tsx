
import React from 'react';

const SummaryDisplay = ({ summary }: any) => {
  return (
    <div>
      <h3>Summary:</h3>
      <pre>{summary}</pre>
    </div>
  );
};

export default SummaryDisplay;
