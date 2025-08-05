
import React, { useState } from 'react';
import axios from 'axios';

const URLInput = () => {
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('url', url);
    formData.append('summary_type', 'quick');

    const response = await axios.post('http://localhost:8000/summarize-url/', formData);
    setSummary(response.data.summary);
  };

  return (
    <div>
      <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Paste URL here" />
      <button onClick={handleSubmit}>Summarize</button>
      <pre>{summary}</pre>
    </div>
  );
};

export default URLInput;
