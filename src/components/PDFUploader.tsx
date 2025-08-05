
import React, { useState } from 'react';
import axios from 'axios';

const PDFUploader = () => {
  const [summary, setSummary] = useState('');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('summary_type', 'quick');

    const response = await axios.post('http://localhost:8000/summarize-pdf/', formData);
    setSummary(response.data.summary);
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <pre>{summary}</pre>
    </div>
  );
};

export default PDFUploader;
