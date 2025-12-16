import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SentimentForm from './components/SentimentForm';
import ResultCard from './components/ResultCard';

interface PredictionResult {
  sentiment: string;
  confidence: number;
  original_text: string;
}

function App() {
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const analyzeSentiment = async (text: string) => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data: PredictionResult = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error connecting to AI backend:", error);
      alert("Failed to connect to the AI model. Please ensure the backend server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Header />
      <SentimentForm onAnalyze={analyzeSentiment} isLoading={loading} />
      {result && <ResultCard result={result} />}
    </div>
  );
}

export default App;