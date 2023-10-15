import React, { useState } from 'react';
import './App.css';
function App() {
  const [text, setText] = useState('');
  const words = text.trim().split(/\s+/).filter(word => word !== '');
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="App">
      <h1>Responsive Paragragh Word <br/>Counter</h1>
      <div className="textarea-container">
        <textarea
          rows={Math.max(10, Math.ceil(words.length / 10))}
          placeholder="Enter your text here..."
          value={text}
          onChange={handleTextChange}
        />
      </div>
      <p>Word Count: {words.length}</p>
    </div>
  );
}
export default App;