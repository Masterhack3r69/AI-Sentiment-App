import React, { useState } from 'react';

interface SentimentFormProps {
  onAnalyze: (text: string) => void;
  isLoading: boolean;
}

const SentimentForm: React.FC<SentimentFormProps> = ({ onAnalyze, isLoading }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim()) {
      onAnalyze(text);
    }
  };

  const handleClear = () => {
    setText('');
  };

  return (
    <div className="glass-card sentiment-form">
      <div className="input-group">
        <textarea
          className="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          maxLength={500}
        />
        <span className="char-count">{text.length}/500</span>
      </div>
      
      <div className="button-group">
        <button 
          className="btn-secondary" 
          onClick={handleClear}
          disabled={!text || isLoading}
        >
          Clear
        </button>
        <button 
          className="btn-primary" 
          onClick={handleSubmit}
          disabled={!text.trim() || isLoading}
        >
          {isLoading ? (
            <>
              <div className="spinner"></div>
              Analyzing...
            </>
          ) : (
            <>
              Analyze Sentiment
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SentimentForm;
