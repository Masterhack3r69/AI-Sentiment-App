import React from 'react';

interface PredictionResult {
  sentiment: string;
  confidence: number;
}

interface ResultCardProps {
  result: PredictionResult;
}

const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  const isPositive = result.sentiment === "POSITIVE";
  const confidencePercent = (result.confidence * 100).toFixed(1);

  return (
    <div className="glass-card result-card">
      <div className={`sentiment-badge ${isPositive ? 'positive' : 'negative'}`}>
        <span>{isPositive ? '😊' : '😠'}</span>
        {result.sentiment}
      </div>
      
      <div className="confidence-section">
        <span className="confidence-label">Confidence Score</span>
        <div className="confidence-value">
          {confidencePercent}<span style={{ fontSize: '1rem', opacity: 0.5 }}>%</span>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
