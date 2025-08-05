
import React from 'react';

const Filters = ({ summaryType, setSummaryType }: any) => {
  return (
    <div>
      <label>Summary Type: </label>
      <select value={summaryType} onChange={(e) => setSummaryType(e.target.value)}>
        <option value="quick">Quick</option>
        <option value="in_depth">In-Depth</option>
      </select>
    </div>
  );
};

export default Filters;
