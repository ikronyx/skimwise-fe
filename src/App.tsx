
import React from 'react';
import PDFUploader from './components/PDFUploader';
import URLInput from './components/URLInput';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Skimwise - AI Summarizer</h1>
      <PDFUploader />
      <URLInput />
    </div>
  );
}

export default App;
