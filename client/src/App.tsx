import { useState } from 'react';
import './App.css'; // Optional: keep default styling or remove

// Define the shape of the response we expect from Python
interface PredictionResult {
  sentiment: string;
  confidence: number;
  original_text: string;
}

function App() {
  // State with proper types
  const [inputText, setInputText] = useState<string>("");
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const analyzeSentiment = async () => {
    if (!inputText.trim()) return;
    
    setLoading(true);
    setResult(null); // Reset previous result while loading

    try {
      // Calling your local Python API
      const response = await fetch('http://127.0.0.1:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data: PredictionResult = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error connecting to AI backend:", error);
      alert("Failed to connect to the AI model. Is your Python server running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1>AI Sentiment Analyzer 🧠</h1>
      <p style={{ color: "#666" }}>Running locally on your machine</p>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <textarea 
          rows={4} 
          placeholder="Type a review here (e.g., 'This product is amazing!')"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          style={{ 
            width: "100%", 
            padding: "10px", 
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />
        
        <button 
          onClick={analyzeSentiment} 
          disabled={loading || !inputText}
          style={{ 
            padding: "12px", 
            fontSize: "16px", 
            cursor: loading ? "not-allowed" : "pointer",
            backgroundColor: loading ? "#ccc" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold"
          }}
        >
          {loading ? "Analyzing..." : "Analyze Sentiment"}
        </button>
      </div>

      {result && (
        <div style={{ 
          marginTop: "30px", 
          padding: "20px", 
          border: "1px solid #ddd", 
          borderRadius: "8px",
          backgroundColor: result.sentiment === "POSITIVE" ? "#e6fffa" : "#fff5f5"
        }}>
          <h2 style={{ margin: "0 0 10px 0", color: result.sentiment === "POSITIVE" ? "#006400" : "#8b0000" }}>
            {result.sentiment === "POSITIVE" ? "😃 POSITIVE" : "😡 NEGATIVE"}
          </h2>
          <p style={{ fontSize: "18px", margin: 0 }}>
            Confidence: <strong>{(result.confidence * 100).toFixed(2)}%</strong>
          </p>
        </div>
      )}
    </div>
  )
}

export default App;